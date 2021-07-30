import React, { useEffect, useReducer } from "react";
import reducer from "../reducers/application";

const baseURL = process.env.REACT_APP_BASE_URL;

const useApplicationData = () => {
     const [state, dispatch] = useReducer(reducer, {
         cats: [],
         sharks: []
     });

     useEffect (() => {
         fetch(`${baseURL}/api/cats`)
         .then(res => res.json())
         .then(data => {
            dispatch({
                type: "cats",
                cats: data
            });
         })
         .catch(err => {
            console.log(`
                Not able to grab cats :( 
                ${err})
            `)
         });

     }, []);

    return { state }
};

export { useApplicationData };