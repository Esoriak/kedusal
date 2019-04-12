import React from 'react';
import './GenerateCharacter.css'
const GenerateCharacter = ({ selectCharacter }) => {
    return (
        <div className="GenerateCharacter">
            <button onClick={selectCharacter}>Push that ta rasse!!!</button>
        </div>
    );
};

export default GenerateCharacter;