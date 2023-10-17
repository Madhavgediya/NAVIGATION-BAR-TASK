import React, {useState} from "react";

export default function About(props) {
  const [mainContainer, setMainContainer] = useState({
    color: "white",
    backgroundColor: "black",
  });

  const darkMood = () => {
    if (mainContainer.color === "white") {
      setMainContainer({
        color: "red",
        backgroundColor: "white",
      });
      setbtnText("Go To Dark Mode");
    } else {
      setMainContainer({
        color: "white",
        backgroundColor: "black",
      });
      setbtnText("Go to Light Mode");
    }
  };

  const [btnText, setbtnText] = useState("Dark Mode");
  return (
    <>
      <div className="container" style={mainContainer}>
        <h3>{props.title}</h3>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item" style={mainContainer}>
            <h2 className="accordion-header" id="headingOne">
              <button
                style={mainContainer}
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                {props.firstTitle}
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">{props.firstDescription}</div>
            </div>
          </div>
          <div className="accordion-item" style={mainContainer}>
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
                style={mainContainer}
              >
                {props.secondTitle}
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">{props.secondDescription}</div>
            </div>
          </div>
          <div className="accordion-item" style={mainContainer}>
            <h2 className="accordion-header" id="headingThree">
              <button
                style={mainContainer}
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                {props.thirdTitle}
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">{props.thirdDescription}</div>
            </div>
          </div>
        </div>
        <div className="container my-4">
          <button className="btn btn-dark" onClick={darkMood}>
            {btnText}
          </button>
        </div>
      </div>
    </>
  );
}

About.defaultProps = {
  title: "Default title",
  firstTitle: "Enter First",
  secondTitle: "Enter Second",
  thirdTitle: "Enter Third",
  firstDescription: "Add Details",
  secondDescription: "Add Details",
  thirdDescription: "Add Details",
};
