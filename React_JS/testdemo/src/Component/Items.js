import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Items() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => response.json())
      .then((json) => setPosts(json));
  }, []);
  return (
    <div>
      <div className="container">
        <div className="row">
          {posts &&
            posts.map((post) => {
              return (
                <>
                  <Link to={`users/${post.id}`}>
                    <div key={post.id} className="col-md-4 mt-3">
                      <h2>{post.name}</h2>
                      <p>{post.email}</p>
                    </div>
                  </Link>
                </>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Items;



// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import "../App.css";

// export default function Items(props) {
//   const userId = useParams();
//   const id = userId.id;

//   const [users, setUsers] = useState([]);

//   const getId = async (id) => {
//     if (id) {
//       const response = await fetch(
//         `https://jsonplaceholder.typicode.com/users/${id}`
//       );
//       const data = await response.json();
//       setUsers([data]);
//     } else {
//       const response = await fetch(
//         `https://jsonplaceholder.typicode.com/users/`
//       );
//       const data = await response.json();
//       setUsers(data);
//     }
//   };

//   useEffect(() => {
//     getId(id);
//   }, [id]);

//   return (
//     <>
//       <div className="container-fluid">
//         <div className="row justify-content-center">
//           {users.map((user) => {
//             return (
//               <div className="col-md-5 mt-5" key={user.id}>
//                 <div className="card border">
//                   <div className="card-body">
//                     <h5 className="card-title">
//                       {user.id}. {user.name}
//                     </h5>
//                     <p className="card-text">
//                       <strong>Address:- </strong>
//                       {user.address.street} {user.address.city} <br />
//                       <strong>Pincode:- </strong>
//                       {user.address.zipcode} <br />
//                       <strong>Phone:- </strong>
//                       {user.phone} <br />
//                       <strong>website:- </strong>
//                       <a href={user.website} target="_blank">
//                         {user.website}
//                       </a>
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </>
//   );
// }
