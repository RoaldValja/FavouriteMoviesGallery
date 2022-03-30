import React from "react";

function Movie(props) {
    return <div className="gallery__item">
        <h4>{props.title} ({props.year})</h4>
        <div className="gallery__item--image">
            <img
                src={props.poster}
                alt={props.title}
            />
        </div>
    </div>
}

export default Movie;