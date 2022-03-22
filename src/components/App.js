import React from "react";
import ReactDOM from "react-dom";
import Footer from "./Footer";
import List from "./List";
import Movie from "./Movie";
import PageHeading from "./PageHeading";

export default function App() {
    return <div>
        <PageHeading />
        <List />
        <Movie title="Scary Movie" link="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/xtYr6LWiOvH6869kYzfLc3FUHLJ.jpg"/>
        <Movie title="Dr. Dolittle" link="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/tLrchGMIkdo1KamQJA6fwvDQEy0.jpg"/>
        <Movie title="Men in Black" link="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/uLOmOF5IzWoyrgIF5MfUnh5pa1X.jpg"/>
        <Footer />
    </div>
}