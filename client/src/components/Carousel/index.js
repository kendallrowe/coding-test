import React from "react";

import CategoryButton from "./CategoryButton";
import NextButton from "./NextButton";

export default function Carousel(props) {
    return (
        <div className="carousel">
            <CategoryButton
                content="Cats"
                changeCategory={e => props.fetchImageCategory("Cats")}
            />
            <CategoryButton
                content="Sharks"
                changeCategory={e => props.fetchImageCategory("Sharks")}
            />
            <CategoryButton
                content="Both!"
                changeCategory={e => props.fetchBothCategories()}
            />
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