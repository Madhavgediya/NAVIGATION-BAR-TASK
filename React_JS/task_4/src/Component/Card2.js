import React from "react";
import TextForm from "./TextForm";
import { Link } from "react-router-dom";

function Card2(props) {
  return (
    <div className="container-fluid">
      <Link to="/card/2">
        <div class="card front">
          <div class="blue"></div>
          <div class="yellow"></div>
          <div class="pink"></div>
          <div class="dots"></div>
          <div class="personal-intro">
            <p>{props.text}</p>
            <p>{props.tagline}</p>
          </div>
        </div>
        <div class="card back">
          <div class="yellow"></div>
          <div class="top dots"></div>
          <div class="personal-info">{props.address}</div>
          <div class="bottom dots">{props.contectNumber}</div>
          <div class="pink">{props.website}</div>
        </div>
        <div></div>
      </Link>
    </div>
  );
}

Card2.defaultProps = {
  text: "Company Name",
  tagline: "Company Tagline",
  address: "Company Address",
  contectNumber: "Company Number",
  website: "Company Website",
};

export default Card2;
