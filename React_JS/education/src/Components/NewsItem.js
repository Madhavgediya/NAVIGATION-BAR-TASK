import React from "react";

const NewsItem = (props) => {
    let { title, description, imageUrl, newsUrl, author, date, source } =
      props;
    return (
      <div className="container-fluid">
        <div className="my-3">
          <div className="card">
            <img
              src={
                imageUrl
                  ? imageUrl
                  : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4fUno8gNEiRw97WUeZTYovxqH0Oyikwmany1x9XsZukGOqW_3f-s7D_GqriFHuon6VY0&usqp=CAU"
              }
              className="card-img-top img-fluid"
              alt="..."
            />
            <span
              className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger z-1"
              style={{ marginLeft: "-4rem", padding: "0.5rem" }}
            >
              {source}
              <span className="visually-hidden">unread messages</span>
            </span>
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <p className="card-text">
                <small className="text-body-secondary">
                  By {author} <br /> On {new Date(date).toGMTString()}
                </small>
              </p>
              <a href={newsUrl} target="_blank" className="btn btn-primary">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

export default NewsItem;
