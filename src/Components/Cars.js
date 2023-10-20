import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // importer bootstrap
import "bootstrap/dist/js/bootstrap.bundle.js"; // importer son JS

const Car = ({ children, color }) => {
  const colorInfo = color ? (
    <p>Couleur : {color}</p>
  ) : (
    <p>Couleur : Il faut choisir une couleur</p>
  );

  if (children) {
    return (
      <div
        className=" cars container-fluid mt-3 d-flex flex-column align-items-center"
        style={{
          backgroundColor: "pink",
          width: "20%",
          height: "150px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        {children}
        {colorInfo}
      </div>
    );
  } else {
    return null;
  }
};

export default Car;
