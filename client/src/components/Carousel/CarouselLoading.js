import React from "react";

export default function CategoryButton(props) {
    return (
        <button onClick={props.changeCategory}>
            {props.content}
        </button>
    )
};