import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import rosario from "./images/rosario.jpg";
import Usuario from "./components/Usuario"

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      nombre: "Rosario + Vampire"
    }
  }
  render() {
    return (
      <div className="content">
        <div className="container-fluid">
          
          <h1>Nimatron Anime</h1>
          <Usuario nombre={this.state.nombre} />
          <img
            className="jumbotron img-fluid"
            src={rosario}
            alt="anime wallpaper"
          />
          <div className="row d-inline-flex align-items-between">
            <div className="col">
              <iframe
                className="col-sm-12 col-md-6 col-lg-6 mx-auto"
                width="400"
                height="315"
                src="https://www.youtube-nocookie.com/embed/d0AIUibwTuQ"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                title="Texhnolyze Episode 1 - English SUB"
              ></iframe>
              <iframe
                className="col-sm-12 col-md-6 col-lg-6 mx-auto"
                width="400"
                height="315"
                src="https://www.youtube-nocookie.com/embed/Zlmswo0S0e0"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                title="Hazbin Hotel Pilot"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
