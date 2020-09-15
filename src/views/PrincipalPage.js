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
          </div>
        </div>
      );
      
    }
    
  }
  
   
              /*
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