import React, { useEffect, useReducer } from "react";
import reducer from "../reducers/application";

import shuffleArray from "../helpers/shuffleArray";

const baseURL = process.env.REACT_APP_BASE_URL;

const useApplicationData = () => {
    const [state, dispatch] = useReducer(reducer, {
        carouselSelectedIndex: 0,
        carouselImages: [],
        category: "both"
    });

    useEffect (() => {
        fetchImageCategory("cats")
    }, []);

    const changeCarouselSelection = indexChange => dispatch({type: "changeSelection", indexChange});

    const changeCategory = category => {
        dispatch({type: "changeCategory", category})
        if (category === "both") {
            return fetchBothCategories();
        } 
        return fetchImageCategory(category);
    };

    const fetchImageCategory = category => {
        return new Promise((resolve, reject) => {
            return fetch(`${baseURL ? baseURL : ""}/api/${category}`)
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

    return { state, changeCarouselSelection, changeCategory, fetchBothCategories, fetchImageCategory };
};

export { useApplicationData };