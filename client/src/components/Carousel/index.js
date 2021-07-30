import React, { useEffect } from "react";

import CarouselImage from "./CarouselImage";
import CarouselLoading from "./CarouselLoading";
import CategoryButton from "./CategoryButton";
import NextButton from "./NextButton";

import { useVisualMode } from "../../hooks/useVisualMode";

export default function Carousel(props) {
    console.log(props.carouselImageURL)
    const { mode, transition } = useVisualMode(props.carouselImageURL ? "IMAGE" : "LOADING");

    useEffect(() => {
        if (props.carouselImageURL && mode === "LOADING") {
            transition("IMAGE")
        } else if (!props.carouselImageURL && mode === "IMAGE") {
            transition("LOADING")
        }
    }, [transition, mode, props.carouselImageURL]);

    return (
        <div className="carousel">
            <CategoryButton
                content="Cats"
                changeCategory={e => props.changeCategory("cats")}
            />
            <CategoryButton
                content="Sharks"
                changeCategory={e => props.changeCategory("sharks")}
            />
            <CategoryButton
                content="Both!"
                changeCategory={e => props.changeCategory("both")}
            />
            <NextButton
                content="Previous"
                changeCarouselSelection={e => props.changeCarouselSelection(-1)}
            />
            {mode === "LOADING" && <CarouselLoading/>}
            {mode === "IMAGE" && <CarouselImage carouselImage={props.carouselImageURL}/>}
            <NextButton
                content="Next"
                changeCarouselSelection={e => props.changeCarouselSelection(1)}
            />
        </div>
    )
};