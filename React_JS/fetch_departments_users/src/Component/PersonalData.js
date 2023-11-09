import React from "react";
import { useLocation } from "react-router-dom";

function PersonalData() {
  const location = useLocation();

  return <div>{location.state.id}</div>;
}

export default PersonalData;
