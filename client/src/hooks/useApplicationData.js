import React, { useEffect, useReducer } from "react";
import reducer from "../reducers/application";

const baseURL = process.env.REACT_APP_BASE_URL;

const useApplicationData = () => {
    const [state, dispatch] = useReducer(reducer, {
        carouselSelectedIndex: 0,
        carouselImages: []
    });

    useEffect (() => {
        fetch(`${baseURL}/api/cats`)
        .then(res => res.json())
        .then(images => {
            dispatch({
                type: "updateCarousel",
                images
            });
        })
        .catch(err => {
            console.log(`
                Not able to grab cats :( 
                ${err})
            `)
        });

    }, []);

    const changeCarouselSelection = indexChange => dispatch({type: "changeSelection", indexChange});

    return { state, changeCarouselSelection}
};

export { useApplicationData };