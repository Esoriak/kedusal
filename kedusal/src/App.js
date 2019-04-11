import React, { Component } from 'react';

import './App.css';
import DisplayApi from './components/DisplayApi';
import GenerateId from './components/GenerateId';


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
  state = {
    charac: sampleId
  }

  getLove() {
    const proxis = "https://cors-anywhere.herokuapp.com/"
    fetch(proxis + "https://melroune.github.io/starwars-api/api/all.json")
      .then(response => response.json())
      .then(data => {
        this.setState({charac: data[0]})
      })
  }
  render() {
    return (
      <div>
        <DisplayApi charac={this.state.charac} />
        <GenerateId selectId={() => this.getLove()} />
      </div>
    )
  }
}

export default App;