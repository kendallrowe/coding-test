import React from "react";

export default function NextButton(props) {
    return (
        <button onClick={props.changeCarouselSelection}>
            {props.content}
        </button>
    )
};