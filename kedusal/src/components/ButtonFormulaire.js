import React from "react";
<<<<<<< HEAD
=======
import './ButtonFormulaire.css';
>>>>>>> 4e159ce4a998ed48fd2f929e64db26f67d8b9d6a

const ButtonFormulaire = props => {
  console.log(props.style);
  return (
    <button
      style={props.style}
      className={
        props.type == "primary" ? "btn btn-primary" : "btn btn-secondary"
      }
      onClick={props.action}
<<<<<<< HEAD
=======
      className="ButtonFormulaire"
>>>>>>> 4e159ce4a998ed48fd2f929e64db26f67d8b9d6a
    >
      {props.title}
    </button>
  );
};

export default ButtonFormulaire;