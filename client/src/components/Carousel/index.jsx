import React, { useEffect } from "react";

import "./styles.scss";

import CarouselImage from "./CarouselImage";
import CarouselLoading from "./CarouselLoading";
import CategoryButton from "./CategoryButton";
import NextButton from "./NextButton";

import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

import { useVisualMode } from "../../hooks/useVisualMode";

export default function Carousel(props) {

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
                        type="Cat"
                        selected={props.category === "cats"}
                        changeCategory={e => props.changeCategory("cats")}
                        url={process.env.PUBLIC_URL + "/images/cat.svg"}
                        alt="Cat by Phạm Thanh Lộc from the Noun Project"
                    />
                    <CategoryButton
                        type="Random"
                        selected={props.category === "both"}
                        changeCategory={e => props.changeCategory("both")}
                        url={process.env.PUBLIC_URL + "/images/random.svg"}
                        alt="random by useiconic.com from the Noun Project"
                    />
                    <CategoryButton
                        type="Shark"
                        selected={props.category === "sharks"}
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
                {mode === "IMAGE" && <CarouselImage carouselImage={props.carouselImageURL} category={props.category}/>}
                <NextButton
                    buttonType="next"
                    changeCarouselSelection={e => props.changeCarouselSelection(1)}
                    icon={faArrowRight}
                />
            </div>
        </article>
    )
};