import React, { Component } from "react";
import { Power2, TimelineLite } from "gsap";

import logo from "./logo.svg";
import volumeOff from "./volume_off.svg";
import volumeOn from "./volume_on.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.intro = React.createRef();
    this.logo = React.createRef();
    this.content = React.createRef();
    this.audio = React.createRef();

    this.state = {
      muted: true
    };
  }

  onVolumeClick = () => {
    if (this.state.muted) {
      this.audio.current.muted = false;
    } else {
      this.audio.current.muted = true;
    }

    this.setState({ muted: !this.state.muted });
  };

  componentDidMount() {
    const tl = new TimelineLite();

    tl
      .to(this.intro.current, 4.5, { opacity: 1, delay: 1 })
      .to(this.intro.current, 1.5, {
        opacity: 0,
        onComplete: () => {
          this.audio.current.play();
        }
      })
      .set(this.logo.current, {
        opacity: 1,
        scale: 2.75,
        delay: 0.5
      })
      .to(this.logo.current, 8, { scale: 0.05, ease: Power2.easeOut })
      .to(this.logo.current, 1.5, { opacity: 0 }, "-=1.5")
      .to(this.content.current, 200, { top: "-170%" });
  }

  render() {
    return (
      <div className="container">
        <section className="intro" ref={this.intro}>
          <p>
            Dans une galaxie lointaine, <br /> quelqu'un vous attend....
          </p>
        </section>
        <section className="logo" ref={this.logo}>
          <img src={logo} alt="Code Wars logo" />
        </section>
        <section className="crawl">
          <div className="content" ref={this.content}>
            <h1 className="title">KEDUSAL </h1>
            <h2 className="subtitle">Vous avez attrapé un match, la periode d'incubation est de 3 jours...</h2>
            <p className="">
              L'humain que vous êtes à de toute évidence de nombreuses qualités mais jamais sur Terre vous n'avez trouvez votre égal.
              Cela arrive parfois quand la force en vous est trop forte, trop éclatante. Ou à l'opposé si elle est trop faible ou camouflé par un défaut monstrueux
              qui effraie vos congénères ( au hasard une calvitie ou un trop gros doigt de pied).
            </p>
            <p>
              Quoi qu'il en soit rassurez vous, la galaxie est grande. Kedusal vous promet un amour galactique fonctionnel. Nous avons trouvez plusieurs profils
              qui vous correspondraient. Evidemment il faudra occulter quelques particularités spécifiques à l'espèce de votre match pour établir le premier contact.
            </p>
            <p>
             Une fois la première passée nous ne doutons pas un seul instant de vous : sachez acceptez la peau luisante
             du gloubiboulgi et il vous le rendra au centuple. Apprenez à caresser le contour des oreilles en trompette et titiller la force !
             L'amour inter espèce, c'est le TURFU. Faites parti de l'aventure,  faites confiance à Kedusal, envoyez un mail à vos match.
            </p>
          </div>
        </section>
        <audio ref={this.audio} muted>
          <source
            type="audio/mpeg"
            src="https://ia801501.us.archive.org/23/items/StarWars_20180709/Star%20Wars.mp3"
          />
        </audio>
        <button className="volume" type="button" onClick={this.onVolumeClick}>
          {/* Icons created by Agarunov Oktay-Abraham from the Noun Project */}
          {/* https://thenounproject.com/agarunov/ */}
          {this.state.muted ? (
            <img src={volumeOff} alt="Volume is off" />
          ) : (
            <img src={volumeOn} alt="Volume is on" />
          )}
        </button>
      </div>
    );
  }
}

export default App;