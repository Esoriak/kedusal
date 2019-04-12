import React, { Component } from "react";

/* Import Components */

import Select from "../components/Select";
// import Input from "../components/Input";
import Button from "../components/ButtonFormulaire";

class Formulaire extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newUser: {
        gender: "",
        eyeColor:"",
        species: "",
        affiliations:"",
        skinColor:"",
      },

      genderOptions: ["Male", "Female", "Others"],
      eyecolorOptions: ["blue", "brown","red","yellow","hazel","gray-blue","orange","green-gold"],
      speciesOptions: ["human","droid","wookies","yoda's species","trandoshan","ewok","sullustan","neimoidian","hutt","twi'lek","vulptereen","toong"],
      affiliationsOptions: ["Alliance to Restore the Republic","Royal House of Naboo","Galactic Empire","Galactic Republic","Imperial Senate","Republic Special Task Force", "Red Squadron","New Republic","Resistance","Jedi Order", "Sith"],
      skincolorOptions: ["green","light", "green and tan","red (black tattoos)","fair, later pale","brown mottle","dark"],
    };
 
  
  }

  /* This lifecycle hook gets executed when the component mounts */


  render() {
    return (
      
      <form className="container" onSubmit={this.handleFormSubmit}>
        
        <Select 
          title={"Gender"}
          name={"gender"}
          options={this.state.genderOptions}
          placeholder={"Select Gender"}
          handleChange={this.handleInput}
        />{" "}

        <Select
          title={"Color Eyes"}
          name={"eyecolor"}
          options={this.state.eyecolorOptions}
          value={this.state.newUser.eyecolor}
          placeholder={"Select Couleur des yeux"}
          handleChange={this.handleInput}
        />{" "}   

        <Select
          title={"Species"}
          name={"species"}
          options={this.state.speciesOptions}
          placeholder={"Select Species"}
          handleChange={this.handleInput}
        />{" "}   

        <Select
          title={"Affiliations"}
          name={"affiliations"}
          options={this.state.affiliationsOptions}
          placeholder={"Select Affiliations"}
          handleChange={this.handleInput}
        />{" "}  

        <Select
          title={"Skin Color"}
          name={"skinColor"}
          options={this.state.skincolorOptions}
          placeholder={"Select Skin Color"}
          handleChange={this.handleInput}
        />{" "}  


        <Button
          action={this.handleFormSubmit}
          type={"primary"}
          title={"Submit"}
          style={buttonStyle}
        />{" "}
        {/*Submit */}

      </form>
    );
  }
}

const buttonStyle = {
  margin: "40px 40px 40px 40px",
  width:"150px",
  height:"50px",
  color: "white",
  background: "rgb(66, 184, 221)",
};

export default Formulaire;
