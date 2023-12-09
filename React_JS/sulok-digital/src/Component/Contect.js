import React from "react";
import { useState } from "react";
export default function Contect() {
  const [address, setAddress] = useState("Junagadh");
  function showFullAddress(){
        if({setAddress} == true){
            document.getElementById("#address").innerHTML = {address};
            console.log("Address");
        }
        else{
            setAddress("1st Floor, 7 Cross Building Khamdhrol Rd junagadh,Gujarat 362001");
            console.log("setAddress");
        }
  }
  return (
    <div>
      <link rel="stylesheet" href="./Contect-style.css" />
      <section id="contact">
        <h1 className="section-header">Contact</h1>

        <div className="contact-wrapper">
          <form id="contact-form" className="form-horizontal" role="form">
            <div className="form-group">
              <div className="col-sm-12">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="NAME"
                  name="name"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <div className="col-sm-12">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="EMAIL"
                  name="email"
                  required
                />
              </div>
            </div>

            <textarea
              className="form-control"
              rows="10"
              placeholder="MESSAGE"
              name="message"
              required
            ></textarea>

            <button
              className="btn btn-primary send-button"
              id="submit"
              type="submit"
              value="SEND"
            >
              <div className="alt-send-button">
                <i className="fa fa-paper-plane"></i>
                <span className="send-text">SEND</span>
              </div>
            </button>
          </form>

          <div className="direct-contact-container">
            <ul className="contact-list m-2">
              <li className="list-item" data-toggle="tooltip" data-placement="top" title="Click and Show Full Address" onClick={showFullAddress}>
                <i className="fa fa-map-marker fa-2x">
                  <span className="contact-text place" id="address">{address}</span>
                </i>
              </li>

              <li className="list-item">
                <i className="fa fa-phone fa-2x">
                  <span className="contact-text phone">
                    <a href="tel:1-212-555-5555" title="Give me a call">
                      8200951852
                    </a>
                  </span>
                </i>
              </li>

              <li className="list-item">
                <i className="fa fa-envelope fa-2x">
                  <span className="contact-text gmail">
                    <a href="mailto:#" title="Send me an email">
                      contact@sulok.digital
                    </a>
                  </span>
                </i>
              </li>
            </ul>

            <hr />
            <ul className="social-media-list">
              <li>
                <a href="#" target="_blank" className="contact-icon">
                  <i className="fa fa-github" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="#" target="_blank" className="contact-icon">
                  <i className="fa fa-codepen" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="#" target="_blank" className="contact-icon">
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="#" target="_blank" className="contact-icon">
                  <i className="fa fa-instagram" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
            <hr />

            <div className="copyright">&copy;Madhav Gediya </div>
          </div>
        </div>
      </section>
    </div>
  );
  document.querySelector("#contact-form").addEventListener("submit", (e) => {
    e.preventDefault();
    e.target.elements.name.value = "";
    e.target.elements.email.value = "";
    e.target.elements.message.value = "";
  });
}

