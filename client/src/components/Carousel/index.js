import React from "react";

import NextButton from "./NextButton";

export default function Carousel(props) {
    return (
        <div className="carousel">
            <NextButton
                content="Previous"
                changeCarouselSelection={e => props.changeCarouselSelection(-1)}
            />
            <img src={props.carouselImage} className="carousel-image" alt="carousel image" />
            <NextButton
                content="Next"
                changeCarouselSelection={e => props.changeCarouselSelection(1)}
            />
        </div>
    )
};