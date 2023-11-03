import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Post() {
  const [post, setPost] = useState([]);

  const userId = useParams();
  const id = userId.id;
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => response.json())
      .then((json) => setPost(json));
  }, []);
  console.log(post.name);
  return (
    <>
      <div>
        <div className="col-md-5 mt-5" key={post.id}>
          <div className="card border">
            <div className="card-body">
              <h5 className="card-title">
                {post.id}. {post.name}
              </h5>
              <p className="card-text">
                <strong>Phone:- </strong>
                {post.phone} <br />
                <strong>website:- </strong>
                <a href={post.website} target="_blank">
                  {post.website}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Post;
