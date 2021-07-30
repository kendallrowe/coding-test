import React from "react";

export default function CategoryButton(props) {
    return (
        <img src={props.url} alt={props.alt} className="category-button" onClick={props.changeCategory}/>
    )
};