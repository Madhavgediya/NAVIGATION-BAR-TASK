import React from "react";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button className="bg-transparent border-0" onClick={() => navigate(-1)}>
      <i class="fa-solid fa-circle-arrow-left fs-4"></i>
    </button>
  );
};

export default BackButton;
