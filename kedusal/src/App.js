import React, { Component } from 'react';

import './App.css';
import DisplayApi from './components/DisplayApi';
import GenerateId from './components/GenerateId';
import Modal from './components/Modal';


const sampleId = {
  gender: "male",
  height: 1.5,
  eyeColor: 'blue',
  species: "human",
  skinColor: "black",
  name: 'kedusal',
  image:""

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

  handleMyChoice = () => {
    if (this.state.userChoice === 'poulet') {
      return (
        < h1 > Moi j'aime le poulet </h1>
      )
    } else if (this.state.userChoice === 'yolo') {
      return ( <h1 > Moi je suis yolo </h1>
      )
    } else return ( <h1> Trou Noir </h1>
    )
  }

  render() {
    return (
      <div>
        <DisplayApi charac={this.state.charac} />
        <GenerateId selectId={() => this.getLove()} />
         < button onClick = {
           () => this.handleUserChoice('poulet')
         } > poulet </button>
         < button onClick = {
           () => this.handleUserChoice('yolo')
         } > yolo </button>

         {this.handleMyChoice()}


      <Modal />
      </div>
      
    )
  }
}

export default App;