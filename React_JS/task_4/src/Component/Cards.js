import React from "react";

function Cards(props) {
  return (
    <div>
      {props.cardnumber == 1 ? (
        <>
          <div className="container-fluid ">
            {/* <!-- First side --> */}
            <div className="main-bg-1-1 mt-3">
              <div className="text-center">
                <img
                  src={props.logo}
                  alt="Company Logo"
                  className="rounded-pill text-white"
                  style={{
                    background: "#a07b6e91",
                    maxHeight: "250px",
                    width: "250px",
                    marginTop: "50%",
                  }}
                />
              </div>
            </div>
            {/* <!-- Second Side --> */}
            <div className="main-bg-1-2 mt-3">
              <div className="text-center">
                <img
                  src={props.logo}
                  alt="Company Logo"
                  className="rounded-pill text-white"
                  style={{ maxHeight: "150px", width: "150px" }}
                />
                <div>
                  <div className="text1">{props.text}</div>
                  <div className="tagline1">{props.tagline}</div>
                </div>
                <div className="p-2" style={{ fontSize: "0.5rem" }}>
                  <div className="phone1">
                    <i className="fa-solid fa-mobile-screen"></i>
                    <div>{props.contectNumber}</div>
                  </div>
                  <div className="address1">
                    <i className="fa-solid fa-location-dot"></i>
                    <div>{props.address}</div>
                  </div>
                  <div className="website1" style={{}}>
                    <i className="fa-solid fa-globe"></i>
                    <div>{props.website}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
      {props.cardnumber == 2 ? (
        <div className="container-fluid">
          {/* <!-- First side --> */}
          <div className="main-bg-2-1 mt-3">
            <div className="">
              <img
                src={props.logo}
                className="logobg-2-1 rounded-pill"
                alt=""
              />
            </div>
            <div className="d-flex align-items-center mt-5 m-2">
              <div>
                <img src={props.logo} className="logo2 rounded-pill" alt="" />
              </div>
              <div>
                <h4 className="fw-bold">{props.text}</h4>
                <div>{props.tagline}</div>
              </div>
            </div>
          </div>
          {/* <!-- Second Side --> */}
          <div className="main-bg-2-2 mt-3">
            <div className="">
              <img
                src={props.logo}
                className="logobg-2-2 rounded-pill"
                alt=""
              />
            </div>
            <div className="d-flex justify-content-center align-items-center text-bg-warning bg-opacity-50">
              <div>
                <img
                  src={props.logo}
                  style={{ width: "60px" }}
                  className="rounded-pill"
                  alt=""
                />
              </div>
              <div>
                <h4 className="fw-bold">{props.text}</h4>
                <div>{props.tagline}</div>
              </div>
            </div>
            <div className="p-2" style={{ fontSize: "0.8rem" }}>
              <div className="my-1">
                <i className="fa-solid fa-mobile-screen"></i>
                <span> {props.contectNumber} </span>
              </div>
              <div className="my-1">
                <i className="fa-solid fa-globe"></i>
                {props.website}
              </div>
              <div className="my-1">
                <div>
                  <i className="fa-solid fa-location-dot"></i>
                  {props.address}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
      {props.cardnumber == 3 ? (
        <>
          <div className="container-fluid">
            <div>
              {/* <!-- First Side --> */}
              <div className="main-bg m-4">
                <div className="justify-content-center text-center align-items-center">
                  <div className="text-center">
                    {/* <!-- image logo --> */}
                    <img
                      src={props.logo}
                      alt="Company Logo"
                      style={{ width: "50px", height: "50px" }}
                    />
                  </div>
                  <div className="mt-1">
                    <h4>{props.text}</h4>
                    <div className="fs-6">{props.tagline}</div>
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

              <div
                className="main-bg-2 m-4 container position-relative"
                style={{ fontSize: "0.7rem" }}
              >
                <div className="mt-4">
                  <div className="text-center">
                    <i className="fa-solid fa-mobile-screen"></i>
                    <div>{props.contectNumber}</div>
                  </div>
                  <div className="text-center">
                    <i className="fa-solid fa-globe"></i>
                    <div>{props.website}</div>
                  </div>
                  <div className="text-center">
                    <i className="fa-solid fa-location-dot"></i>
                    <div>{props.address}</div>
                  </div>
                </div>
                <div className="position-absolute bottom-0">
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
          <div className="container-fluid">
            {/* <!-- First Side --> */}
            <div className="main-bg-4-1 m-4">
              <div className="">
                <div className="text-center">
                  <img
                    src={props.logo}
                    alt="Logo"
                    width="55px"
                    height="55px"
                    className="mt-4 rounded-pill"
                  />
                  <div className="textFont">{props.text}</div>
                  <div className="mb-2">{props.tagline}</div>
                </div>
                <div className="footer text-center align-items-center" >
                  <span className="bg-black px-2 py-2 rounded-pill w-100" style={{ fontSize: "0.7rem" }}>
                    {props.website}
                  </span>
                </div>
              </div>
              <div></div>
            </div>

            {/* <!-- Second Side --> */}
            <div className="main-bg-4-2 m-4" style={{ fontSize: "0.7rem" }}>
              <div className="row">
                {/* <div className="col-md-6 mt-3 border-end border-warning border-2">
                  <div className="">
                    <div className="text-center">
                      <img
                        src={props.logo}
                        alt="Logo"
                        width="55px"
                        height="55px"
                        className="mt-4 rounded-pill"
                      />
                      <div className="textFont mt-2">{props.text}</div>
                      <div className="mt-2">{props.tagline}</div>
                    </div>
                  </div>
                </div> */}
                <div className="mt-3">
                  <div className="border-bottom border-warning border-2 rounded-pill text-center my-1">
                    <i className="fa-solid fa-mobile-screen"></i>{" "}
                    <div> {props.contectNumber} </div>
                  </div>
                  <div className="border-bottom border-warning border-2 rounded-pill text-center my-1">
                    <i className="fa-solid fa-globe"></i>
                    <div>
                    {props.website}
                    </div>
                  </div>
                  <div className="border-bottom border-warning border-2 rounded-pill text-center my-1">
                    <div style={{ height: "80px", overflow: "hidden" }}>
                      <i className="fa-solid fa-location-dot"></i>
                      <div>
                      {props.address}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center mt-1">
                <span className="bg-warning text-black rounded-pill px-3 py-2 text-center">
                  Visit Again
                </span>
              </div>
            </div>
          </div>
        </>
      ) : null}
      {props.cardnumber == 5 ? (
        <div className="container-fluid">
          {/* <!-- First Side --> */}
          <div className="main-bg-5-1 m-4 position-relative">
            <div className="design-1 position-absolute"></div>
            <div className="design-2 position-absolute"></div>
            <div className="">
              <div className="text-center">
                <img
                  src={props.logo}
                  alt="Logo"
                  width="70px"
                  height="70px"
                  className="mt-4 rounded-pill"
                />
                <div className="textFont">{props.text}</div>
                <div className="mb-2">{props.tagline}</div>
              </div>
            </div>
            <div></div>
          </div>

          {/* <!-- Second Side --> */}
          <div className="main-bg-5-2 m-4 position-relative">
            <div className="design-4 position-absolute"></div>
            <div className="row">
              <div className="col-md-5 position-relative">
                <div className="main-bg-5-1">
                  <div className="text-center">
                    <img
                      src={props.logo}
                      alt="Logo"
                      width="55px"
                      height="55px"
                      className="mt-4 rounded-pill"
                    />
                    <div className="fs-5 mt-2">{props.text}</div>
                  </div>
                  <div className="design-3 position-absolute"></div>
                </div>
              </div>
              <div className="col-md-7 mt-3">
                <div className="mt-2">
                  <i className="fa-solid fa-mobile-screen"></i>
                  <span> {props.contectNumber} </span>
                </div>
                <div className="mt-2">
                  <i className="fa-solid fa-globe"></i>&nbsp;
                  {props.website}
                </div>
                <div className="mt-2">
                  <div style={{ height: "80px", overflow: "hidden" }}>
                    <i className="fa-solid fa-location-dot"></i> &nbsp;
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
