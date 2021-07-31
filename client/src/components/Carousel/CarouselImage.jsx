import React from "react";

export default function CarouselImage(props) {

    return (
        <img src={props.carouselImage} className="carousel-image" alt={`current selection from ${props.category} list`} />
    )
};