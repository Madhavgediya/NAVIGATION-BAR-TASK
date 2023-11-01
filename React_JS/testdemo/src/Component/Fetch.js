import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Items from "./Items";

export default function Fetch() {
  const [user, setUser] = useState([]);

  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let jsonData = data;
      setUser(jsonData);
    });

  const userId = useParams();
  const id = userId.id;

  return (
    <div>
      <Items id={id}/>
    </div>
  );
}





