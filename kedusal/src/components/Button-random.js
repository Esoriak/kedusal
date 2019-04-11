import React, { Component } from 'react';
import './Button-random.css'
import { randomBytes } from 'crypto';

const ButtonRandom =({selectStar}) =>{
      return (
        <div className="ButtonRandom">
            <div className="button-random">
            <button onClick={selectStar} > J'ai de la force </button>
            </div>
        </div>
      );
    };




export default ButtonRandom;