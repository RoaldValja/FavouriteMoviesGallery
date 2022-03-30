import React from "react";
import movies from "../movies";

function ListElement(props) {
  return (
    <li>{props.title}</li>
  )
}

function createListElement(title) {
  return (
      <ListElement
          key={title.id}
          title={title.title}
      />
  )
}

function List() {
  return (
    <ul>
      {movies.map(createListElement)}
    </ul>
  );
}

export default List;
