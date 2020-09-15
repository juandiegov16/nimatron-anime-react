import React from "react";
import rosario from "../images/rosario.jpg";
/* import Usuario from "./components/Usuario"; */
import DataVideos from "../local/videos.json";
import Videoscript from "../components/Videoscript"


export default class PrincipalPage extends React.Component {
   
    constructor(props) {
      super(props);
      this.state = {
        keys: []
      };
    }
  
    componentDidMount(){
      this.cargarVideos();
    }
  
    cargarVideos = () => {
      let videosKeys = Object.keys(DataVideos);
      this.setState({keys: videosKeys})
    }
  
    render() {
      return (
        
        <div className="content">
          <div className="container-fluid">
            <h1>Nimatron Anime</h1>
            <div className="row">
              <img
                className="jumbotron img-fluid"
                src={rosario}
                alt="anime wallpaper"
              />
            </div>
            
            <Videoscript 
                data = {DataVideos}
                keys = {this.state.keys}          
            /> 
            
            <div className="card-deck row-cols-4 justify-content-center"></div>
          </div>
        </div>
      );
      
    }
    
  }
  
   
              /*<div className="card rounded">
                <iframe
                  src="https://www.youtube-nocookie.com/embed/oAXrRWLKzko"
                  className="card-img-top"
                  alt="..."
                  title="Ergo Proxy OP [HD]"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                />
                <div className="card-body">
                  <p className="card-text">
                    <h5 className="card-title">Ergo Proxy</h5>
                    <br />
                    Opening
                    <br /> <i>Monoral - "Kiri"</i>
                  </p>
                </div>
              </div>
              <div className="card rounded">
                <iframe
                  src="https://www.youtube-nocookie.com/embed/Eq6EYcpWB_c"
                  className="card-img-top"
                  alt="..."
                  title="Samurai Champloo - Opening"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                />
                <div className="card-body">
                  <p className="card-text">
                    <h5 className="card-title">Samurai Champloo</h5>
                    <br />
                    Opening
                    <br /> <i>Nujabes - "Battlecry"</i>
                  </p>
                </div>
              </div>
              <div className="card rounded">
                <iframe
                  src="https://www.youtube-nocookie.com/embed/SJ5ICtGn6u8"
                  className="card-img-top"
                  alt="..."
                  title="Gantz - Opening"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                />
                <div className="card-body">
                  <p className="card-text">
                    <h5 className="card-title">Gantz</h5>
                    <br />
                    Opening
                    <br /> <i>RIP SLYME - "Super Shooter"</i>
                  </p>
                </div>
              </div>
              <div className="card rounded">
                <iframe
                  src="https://www.youtube-nocookie.com/embed/2e1t5VM9jTk"
                  className="card-img-top"
                  alt="..."
                  title="Vinland Saga - Opening 2"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                />
                <div className="card-body">
                  <p className="card-text">
                    <h5 className="card-title">Vinland Saga</h5>
                    <br />
                    Opening 2
                    <br /> <i>MAN WITH A MISSION - "Dark Crow"</i>
                  </p>
                </div>
              </div>
            */