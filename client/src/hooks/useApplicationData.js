import React, { useEffect, useReducer } from "react";
import reducer from "../reducers/application";

import shuffleArray from "../helpers/shuffleArray";

const baseURL = process.env.REACT_APP_BASE_URL;

const useApplicationData = () => {
    const [state, dispatch] = useReducer(reducer, {
        carouselSelectedIndex: 0,
        carouselImages: []
    });

    useEffect (() => {
        fetchImageCategory("cats")
    }, []);

    const changeCarouselSelection = indexChange => dispatch({type: "changeSelection", indexChange});

    const fetchImageCategory = category => {
        return new Promise((resolve, reject) => {
            return fetch(`${baseURL}/api/${category}`)
            .then(res => res.json())
            .then(async images => {
                await dispatch({
                    type: "updateCarousel",
                    images
                });
                resolve(images)
            })
            .catch(err => {
                reject(err)
            });
        });
    };

    const fetchBothCategories = () => {
        return new Promise((resolve, reject) => {
            Promise.all([
                fetchImageCategory("cats"),
                fetchImageCategory("sharks")
            ])
            .then(all => {
                const images = [...all[0], ...all[1]]

                dispatch({
                    type: "updateCarousel",
                    images: shuffleArray(images)

                })
                resolve(images)
            })
            .catch(err => {
                reject(err)
            });
        });
    }

    return { state, changeCarouselSelection, fetchBothCategories, fetchImageCategory }
};

export { useApplicationData };