import React from "react";
/*import rosario from "../images/rosario.jpg";
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
              {/* <div className="row">
                <img
                  className="jumbotron img-fluid mx-auto d-block rounded"
                  src={rosario}
                  alt="anime wallpaper"
                />
              </div> */}
          
            <Videoscript data={DataVideos} keys={this.state.keys} />
          </div>
        </div>
      );
      
    }
    
  }
  