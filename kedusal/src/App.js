import React, { Component } from 'react';

import './App.css';
import GenerateCharacter from './components/GenerateCharacter';
import DisplayCharacter from './components/DisplayCharacter';
import Formulaire from './components/Formulaire';



const sampleId = {
  gender: "male",
  height: 1.5,
  eyeColor: 'blue',
  species: "human",
  skinColor: "black",
  name: 'kedusal',
  image:"https://thewelltraveledjedi.com/wp-content/uploads/2017/08/Welcome-Young-Jedi.png"

}

class App extends Component {
  state = {
    charac: sampleId,
    userChoice: ''
  }

  getLovpoulet() {
    const proxis = "https://cors-anywhere.herokuapp.com/"
    fetch(proxis + "https://melroune.github.io/starwars-api/api/all.json")
      .then(response => response.json())
      .then(data => {
         const random = Math.floor(Math.random() * data.length)
        this.setState({charac :data[random]})
      })
  }

  handleUserChoice = choice => {
    this.setState({
      userChoice: choice
    })
  }

  

  render() {
    return (
      <div>
        <Formulaire/>
        <DisplayCharacter charac={this.state.charac}/>
        <GenerateCharacter selectCharacter={() =>this.getLovpoulet()}/>
      
      </div>
      
    )
  }
}

export default App;