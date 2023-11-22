import React from "react";
import { Link } from "react-router-dom";
import Card1 from "./Card1";

function Cards(props) {
  return (
    <div>
      {props.cardnumber == 1 ? (
        <>
          <div className="container-fluid">
            <div className="front-side">
              <div className="color-grid">
                <div className="black"></div>
                <div className="red1"></div>
                <div className="red2"></div>
                <div className="green"></div>
              </div>
              <div className="info-grid">
                <div className="name">
                  <h2 className="w-50">{props.text}</h2>
                  <h5>{props.tagline}</h5>
                </div>
                <img src={props.logo} alt="Compuny Image" style={{width: "100px", height: "100px", right: "10px"}} className="rounded-pill position-absolute" />
                <div className="addr">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    id="Layer_1"
                    x="0px"
                    y="0px"
                    viewBox="0 0 512 512"
                    style={{ enableBackground: "new 0 0 512 512" }}
                    width="15px"
                    height="15px"
                  >
                    <g>
                      <g>
                        <path
                          d="M455.139,498.052l-99.132-99.132c-1.532-1.532-3.61-2.392-5.777-2.392h-18.927c-4.512,0-8.17,3.657-8.17,8.17    s3.658,8.17,8.17,8.17h15.542l82.792,82.791H82.362l82.791-82.791h15.542c4.512,0,8.17-3.657,8.17-8.17s-3.658-8.17-8.17-8.17    H161.77c-2.167,0-4.245,0.861-5.777,2.392l-99.132,99.132c-2.337,2.338-3.036,5.851-1.771,8.904    c1.265,3.053,4.244,5.044,7.548,5.044h386.723c3.304,0,6.283-1.99,7.548-5.044C458.175,503.903,457.475,500.39,455.139,498.052z"
                          fill="#FFFFFF"
                        />
                      </g>
                    </g>
                    <g>
                      <g>
                        <path
                          d="M256,0C161.393,0,84.426,76.968,84.426,171.574c0,35.596,10.808,69.742,31.263,98.756l133.641,188.964    c1.532,2.165,4.019,3.452,6.671,3.452c2.653,0,5.14-1.288,6.671-3.452L396.32,270.32c20.448-29.004,31.256-63.15,31.256-98.746    C427.574,76.968,350.607,0,256,0z M382.971,260.895L256,440.427L129.037,260.905c-18.495-26.234-28.271-57.125-28.271-89.331    C100.766,85.978,170.403,16.34,256,16.34s155.234,69.637,155.234,155.234C411.234,203.78,401.458,234.671,382.971,260.895z"
                          fill="#FFFFFF"
                        />
                      </g>
                    </g>
                    <g>
                      <g>
                        <path
                          d="M256,92.596c-43.549,0-78.979,35.429-78.979,78.979c0,14.657,4.073,28.988,11.779,41.442    c2.375,3.836,7.41,5.022,11.247,2.649c3.837-2.375,5.023-7.41,2.649-11.247c-6.107-9.87-9.335-21.225-9.335-32.843    c0-34.539,28.099-62.638,62.638-62.638s62.638,28.099,62.638,62.638S290.539,234.213,256,234.213    c-11.617,0-22.974-3.228-32.843-9.335c-3.839-2.376-8.873-1.187-11.247,2.649s-1.189,8.873,2.649,11.247    c12.454,7.706,26.784,11.779,41.44,11.779c43.549,0,78.979-35.429,78.979-78.979C334.979,128.025,299.549,92.596,256,92.596z"
                          fill="#FFFFFF"
                        />
                      </g>
                    </g>
                  </svg>
                  <span className="" style={{ lineHeight: "0.8rem" }}>
                    {props.address}
                  </span>
                </div>
                <div className="phoneNo">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    viewBox="0 0 472.811 472.811"
                    enable-background="new 0 0 472.811 472.811"
                    width="20px"
                    height="20px"
                  >
                    <g>
                      <path
                        d="M358.75,0H114.061C97.555,0,84.128,13.428,84.128,29.934v412.944c0,16.505,13.428,29.934,29.934,29.934H358.75   c16.506,0,29.934-13.428,29.934-29.934V29.934C388.683,13.428,375.256,0,358.75,0z M99.128,75.236h274.556v312.687H99.128V75.236z    M114.061,15H358.75c8.234,0,14.934,6.699,14.934,14.934v35.302H99.128V29.934C99.128,21.699,105.827,15,114.061,15z    M358.75,457.811H114.061c-8.234,0-14.934-6.699-14.934-14.934v-44.955h274.556v44.955   C373.683,451.112,366.984,457.811,358.75,457.811z"
                        fill="#FFFFFF"
                      />
                      <path
                        d="m236.406,404.552c-13.545,0-24.564,11.02-24.564,24.565s11.02,24.564 24.564,24.564 24.564-11.02 24.564-24.564-11.019-24.565-24.564-24.565zm0,39.129c-8.031,0-14.564-6.534-14.564-14.564 0-8.031 6.533-14.565 14.564-14.565s14.564,6.534 14.564,14.565c0,8.03-6.533,14.564-14.564,14.564z"
                        fill="#FFFFFF"
                      />
                      <path
                        d="m202.406,47.645h68c2.762,0 5-2.239 5-5s-2.238-5-5-5h-68c-2.762,0-5,2.239-5,5s2.238,5 5,5z"
                        fill="#FFFFFF"
                      />
                      <path
                        d="m184.409,47.645c1.31,0 2.6-0.53 3.53-1.46 0.93-0.94 1.47-2.22 1.47-3.54s-0.54-2.6-1.47-3.54c-0.931-0.93-2.221-1.46-3.53-1.46-1.32,0-2.601,0.53-3.54,1.46-0.93,0.93-1.46,2.22-1.46,3.54s0.53,2.6 1.46,3.54c0.93,0.93 2.22,1.46 3.54,1.46z"
                        fill="#FFFFFF"
                      />
                    </g>
                  </svg>
                  <p className="fw-bold">{props.contectNumber}</p>
                  {props.website}
                </div>
              </div>
            </div>
            <div className="back-side">
              <div className="color-grid">
                <div className="black"></div>
                <div className="red1"></div>
                <div className="red2"></div>
                <div className="green"></div>
              </div>
              <div className="name-tag">
                <h1>
                  <strong>{props.text}</strong>
                </h1>
                <h3>{props.tagline}</h3>
              </div>
            </div>
          </div>
        </>
      ) : null}
      {props.cardnumber == 2 ? (
        <div className="container-fluid">
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
        </div>
      ) : null}
      {props.cardnumber == 3 ? (
        <>
          <div class="container-fluid">
            <div>
              {/* <!-- First Side --> */}
              <div class="main-bg m-4">
                <div class="justify-content-center text-center align-items-center">
                  <div class="text-center">
                    {/* <!-- image logo --> */}
                    <img src={"" + props.logo} alt="Company Logo" />
                  </div>
                  <div class="mt-3">
                    <h4>{props.text}</h4>
                    <div class="fs-6">{props.tagline}</div>
                  </div>
                </div>
                <div>
                  {/* <!-- Footer Color --> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="336"
                    height="46"
                    viewBox="0 0 336 46"
                    fill="none"
                  >
                    <path
                      d="M0 15.6152V46.0002H336V15.6152C330.812 32.8384 314.259 24.9756 298.941 15.6152C233.396 -24.4386 190.482 27.5966 154.906 15.6152C63.7412 -28.9407 18.2824 59.0478 0 15.6152Z"
                      fill="#440708"
                    />
                  </svg>
                </div>
              </div>
              {/* <!-- Second Side --> */}

              <div class="main-bg-2 m-4">
                <div class="row">
                  <div class="col-md-6 text-center">
                    <i class="fa-solid fa-mobile-screen"></i>
                    <div>{props.contectNumber}</div>
                  </div>
                  <div class="col-md-6 text-center">
                    <i class="fa-solid fa-globe"></i>
                    <div>{props.website}</div>
                  </div>
                </div>
                <div class="text-center">
                  <i class="fa-solid fa-location-dot"></i>
                  <div>{props.address}</div>
                </div>
                <div>
                  {/* <!-- Footer Color --> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="336"
                    height="46"
                    viewBox="0 0 336 46"
                    fill="none"
                  >
                    <path
                      d="M0 15.6152V46.0002H336V15.6152C330.812 32.8384 314.259 24.9756 298.941 15.6152C233.396 -24.4386 190.482 27.5966 154.906 15.6152C63.7412 -28.9407 18.2824 59.0478 0 15.6152Z"
                      fill="#440708"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
      {props.cardnumber == 4 ? (
        <>
          <div class="container-fluid">
            {/* <!-- First Side --> */}
            <div class="main-bg-4-1 m-4">
              <div class="">
                <div class="text-center">
                  <img
                    src="../Card-3.png"
                    alt="Logo"
                    width="55px"
                    height="55px"
                    class="mt-4 rounded-pill"
                  />
                  <div class="textFont">{props.text}</div>
                  <div class="mb-2">{props.tagline}</div>
                </div>
                <div class="footer text-center align-items-center">
                  <span class="bg-black px-2 py-2 rounded-pill">
                    {props.website}
                  </span>
                </div>
              </div>
              <div></div>
            </div>

            {/* <!-- Second Side --> */}
            <div class="main-bg-4-2 m-4">
              <div class="row">
                <div class="col-md-6 mt-3 border-end border-warning border-2">
                  <div class="">
                    <div class="text-center">
                      <img
                        src="../Card-3.png"
                        alt="Logo"
                        width="55px"
                        height="55px"
                        class="mt-4 rounded-pill"
                      />
                      <div class="textFont mt-2">{props.text}</div>
                      <div class="mt-2">{props.tagline}</div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 mt-3">
                  <div class="border-bottom border-warning border-2 rounded-pill text-center my-1">
                    <i class="fa-solid fa-mobile-screen"></i>{" "}
                    <span> {props.contectNumber} </span>
                  </div>
                  <div class="border-bottom border-warning border-2 rounded-pill text-center my-1">
                    <i class="fa-solid fa-globe"></i>
                    {props.website}
                  </div>
                  <div class="border-bottom border-warning border-2 rounded-pill text-center my-1">
                    <div style={{ height: "80px", overflow: "hidden" }}>
                      <i class="fa-solid fa-location-dot"></i>
                      {props.address}
                    </div>
                  </div>
                </div>
              </div>
              <div class="text-center mt-1">
                <span class="bg-warning text-black rounded-pill px-3 py-2 text-center">
                  Visit Again
                </span>
              </div>
            </div>
          </div>
        </>
      ) : null}
      {props.cardnumber == 5 ? (
        <div class="container-fluid">
          {/* <!-- First Side --> */}
          <div class="main-bg-5-1 m-4 position-relative">
            <div class="design-1 position-absolute"></div>
            <div class="design-2 position-absolute"></div>
            <div class="">
              <div class="text-center">
                <img
                  src={props.logo}
                  alt="Logo"
                  width="55px"
                  height="55px"
                  class="mt-4 rounded-pill"
                />
                <div class="textFont">{props.text}</div>
                <div class="mb-2">{props.tagline}</div>
              </div>
            </div>
            <div></div>
          </div>

          {/* <!-- Second Side --> */}
          <div class="main-bg-5-2 m-4 position-relative">
            <div class="design-4 position-absolute"></div>
            <div class="row">
              <div class="col-md-5 position-relative">
                <div class="main-bg-5-1">
                  <div class="text-center">
                    <img
                      src={props.logo}
                      alt="Logo"
                      width="55px"
                      height="55px"
                      class="mt-4 rounded-pill"
                    />
                    <div class="fs-5 mt-2">{props.text}</div>
                  </div>
                  <div class="design-3 position-absolute"></div>
                </div>
              </div>
              <div class="col-md-7 mt-3">
                <div class="mt-2">
                  <i class="fa-solid fa-mobile-screen"></i>
                  <span> {props.contectNumber} </span>
                </div>
                <div class="mt-2">
                  <i class="fa-solid fa-globe"></i>&nbsp;
                  {props.website}
                </div>
                <div class="mt-2">
                  <div style={{ height: "80px", overflow: "hidden" }}>
                    <i class="fa-solid fa-location-dot"></i> &nbsp;
                    {props.address}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Cards;
