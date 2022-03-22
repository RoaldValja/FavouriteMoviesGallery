import React from "react";
import ReactDOM from 'react-dom';

function Movie(props) {
    return <div className="gallery__item">
        <h4>{props.title}</h4>
        <div className="gallery__item--image">
            <img
                src={props.link}
                alt={props.title}
            />
        </div>
    </div>
}

export default Movie;