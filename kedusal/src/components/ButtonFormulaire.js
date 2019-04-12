import React from "react";
import './ButtonFormulaire.css';

const ButtonFormulaire = props => {
  console.log(props.style);
  return (
    <button
      style={props.style}
      className={
        props.type == "primary" ? "btn btn-primary" : "btn btn-secondary"
      }
      onClick={props.action}
      className="ButtonFormulaire"
    >
      {props.title}
    </button>
  );
};

export default ButtonFormulaire;