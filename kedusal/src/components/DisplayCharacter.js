import React from 'react';
import './DisplayCharacter.css';


const DisplayCharacter = ({ charac }) => {
    return (
        <div className="DisplayCharacter">
                <img src={charac.image} alt="lover" />

            <h2>{charac.name}</h2>
        </div>
    );
};

export default DisplayCharacter;

