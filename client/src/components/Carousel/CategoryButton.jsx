import React from "react";

const classNames = require("classnames");
 
export default function CategoryButton(props) {
    const buttonClasses = classNames("category-button",{
        "category-button--selected": props.selected
    });

    return (
        <img src={props.url} alt={props.alt} className={buttonClasses} onClick={props.changeCategory}/>
    )
};