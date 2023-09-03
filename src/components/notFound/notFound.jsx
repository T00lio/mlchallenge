import React from "react";
import "./notFound.css";
import error from "../../assets/images/error.gif";

const NotFound = () => {
  return (
    <div className="error">
      <h1>404</h1>
      <h2>Page not found</h2>
      <img
        className="error-img"
        src={error}
        width={500}
        height={500}
        alt="error"
        style={{ marginLeft: "auto", marginRight: "auto" }}
      />
    </div>
  );
};

export default NotFound;
