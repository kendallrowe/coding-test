import React from "react";

const classNames = require("classnames");

export default function NextButton(props) {
    const buttonClasses = classNames("next-button", `button--${props.buttonType}`);

    return (
        <button className={buttonClasses} onClick={props.changeCarouselSelection}>
            {props.buttonType}
        </button>
    )
};