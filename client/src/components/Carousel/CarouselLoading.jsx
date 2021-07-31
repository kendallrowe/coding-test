import React from "react";

export default function CarouselLoading(props) {
    return (
        <img src={process.env.PUBLIC_URL + "/images/cat-loading.gif"} className="carousel-image" alt="Loading message with cat running" />
    )
};