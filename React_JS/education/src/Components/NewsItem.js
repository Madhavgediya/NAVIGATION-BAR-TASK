import React, { Component } from "react";

export default class NewsItem extends Component {

  render() {
    let {title,description,imageUrl,newsUrl} = this.props;
    return (
      <div className="my-3">
        <div className="card" style={{width: "18rem"}}>
          <img src={imageUrl?imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4fUno8gNEiRw97WUeZTYovxqH0Oyikwmany1x9XsZukGOqW_3f-s7D_GqriFHuon6VY0&usqp=CAU"} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
            {description}
            </p>
            <a href={newsUrl} target="_blank" className="btn btn-primary">
             Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}
