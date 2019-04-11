import React, { Component } from 'react';

import './App.css';
import DisplayApi from './components/DisplayApi';
import GenerateId from './components/GenerateId';
<<<<<<< HEAD
import Formulaire from './components/Formulaire';
=======
import Modal from './components/Modal';
>>>>>>> a27667b7469bd271f0276f5188e8b73abde9d79c


const sampleId = {
  gender: "male",
  height: 1.5,
  eyeColor: 'blue',
  species: "human",
  affilations: ["Confederacy of Independent Systems ", "Separatist Droid Army"],
  skinColor: "black",
  name: 'kedusal'


}

class App extends Component {
  state ={
    charac: sampleId
  }

getLove (){
  fetch("https://melroune.github.io/starwars-api/api")
  .then( response => response.json())
  .then(data => {this.setState({
    result:data[0]
  })

  })
}
 render() {
    return (
      <div>
      <DisplayApi charac={this.state.charac} />
      |<GenerateId selectId ={() => this.getLove()} />
      <Modal/>
      </div>
      
    )
  }
}

export default App;
