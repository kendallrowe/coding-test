import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const classNames = require("classnames");

export default function NextButton(props) {
    const buttonClasses = classNames("next-button", `next-button--${props.buttonType}`);

    return (
        <FontAwesomeIcon className={buttonClasses} onClick={props.changeCarouselSelection} icon={props.icon}/>
    )
};