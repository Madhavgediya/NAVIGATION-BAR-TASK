import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Items from "./Items";

export default function Fetch() {
  const [user, setUser] = useState([]);

  const getId = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
    setUsers(data);
  };

  useEffect(() => {
    getId();
  }, []);

  const userId = useParams();
  const id = userId.id;

  return (
    <div>
      <Items id={id} />
    </div>
  );
}
