import React from "react";
import "./pkm-detail.scss";
const PKMDetail = ({ id, species, name, status, image, gender }) => {
  return (
    <div className="pkm-detail">
      <span>
        <strong>Id:</strong>
        {id}
      </span>
      <span>
        <strong>Species:</strong>
        {species}
      </span>
      <span>
        <strong>Gender:</strong>
        {gender}
      </span>
      <span>
        <strong>Name:</strong>
        {name}
      </span>
      <span>
        <strong>Status:</strong>
        {status}
      </span>
      <span>
        {" "}
        <img src={image} alt={name} />
      </span>
    </div>
  );
};

export default PKMDetail;
