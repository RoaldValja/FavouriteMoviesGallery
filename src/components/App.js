import React from "react";
import Footer from "./Footer";
import List from "./List";
import Movie from "./Movie";
import PageHeading from "./PageHeading";
import movies from "../movies";
import Timer from "./Timer";

function createMovie(movie) {
    return (
        <Movie 
            key={movie.id}
            title={movie.title}
            poster={movie.poster}
            year={movie.year}
        />
    )
}

export default function App() {
    return <div>
        <Timer />
        <PageHeading />
        <List />
        {movies.map(createMovie)}
        <Footer />
    </div>
}