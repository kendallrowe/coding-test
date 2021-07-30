import React, { useEffect } from "react";

import "./styles.scss";

import CarouselImage from "./CarouselImage";
import CarouselLoading from "./CarouselLoading";
import CategoryButton from "./CategoryButton";
import NextButton from "./NextButton";

import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

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
        <article className="carousel">

            <div className="carousel-header">
                <div className="button-container">
                    <CategoryButton
                        content="Cats"
                        changeCategory={e => props.changeCategory("cats")}
                        url={process.env.PUBLIC_URL + "/images/cat.svg"}
                        alt="Cat by Phạm Thanh Lộc from the Noun Project"
                    />
                    <CategoryButton
                        content="Both!"
                        changeCategory={e => props.changeCategory("both")}
                        url={process.env.PUBLIC_URL + "/images/random.svg"}
                        alt="random by useiconic.com from the Noun Project"
                    />
                    <CategoryButton
                        content="Sharks"
                        changeCategory={e => props.changeCategory("sharks")}
                        url={process.env.PUBLIC_URL + "/images/shark.svg"}
                        alt="Shark by Bakunetsu Kaito from the Noun Project"
                    />
                </div>
            </div>
            <div className="carousel-body">
                <NextButton
                    buttonType="previous"
                    changeCarouselSelection={e => props.changeCarouselSelection(-1)}
                    icon={faArrowLeft}
                />
                {mode === "LOADING" && <CarouselLoading/>}
                {mode === "IMAGE" && <CarouselImage carouselImage={props.carouselImageURL}/>}
                <NextButton
                    buttonType="next"
                    changeCarouselSelection={e => props.changeCarouselSelection(1)}
                    icon={faArrowRight}
                />
            </div>
        </article>
    )
};