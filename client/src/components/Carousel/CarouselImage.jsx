import React from "react";

// const classNames = require('classnames');

export default function CarouselImage(props) {
    // const imageClass = classNames("carousel-image", "")

    return (
        <img src={props.carouselImage} className="carousel-image" alt={`current selection from ${props.category} list`} />
    )
};