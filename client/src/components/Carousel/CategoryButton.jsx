import React from "react";

import Cat from "./category-images/Cat";
import Random from "./category-images/Random";
import Shark from "./category-images/Shark";

const classNames = require("classnames");
 
export default function CategoryButton(props) {
    const buttonClasses = classNames("category-button",{
        "category-button--selected": props.selected
    });

    return (
        <span onClick={props.changeCategory}>
            {props.type === "Cat" && <Cat classNames={buttonClasses} alt={props.alt}/>}
            {props.type === "Random" && <Random classNames={buttonClasses} alt={props.alt}/>}
            {props.type === "Shark" && <Shark classNames={buttonClasses} alt={props.alt}/>}
        </span>
    )
};