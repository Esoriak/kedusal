import React, { Component } from 'react';

import './App.css';
import DisplayApi from './components/DisplayApi';
import GenerateId from './components/GenerateId';
import Footer from './components/Bann-foot';
import Navbar from './components/navbar';


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
      <header>
      <Navbar/>
      </header>
      <DisplayApi charac={this.state.charac} />
      |<GenerateId selectId ={() => this.getLove()} />



<body>

</body>

<footer>
        <Footer />
</footer>
      </div>
    )
  }
}

export default App;
