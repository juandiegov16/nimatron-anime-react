import React from "react"
import Card from './Card'


export default class Videoscript extends React.Component {


  render() {
    const {keys, data} = this.props;
    return (
      <div className="content" style={{display:"inline-block"}}>
        {keys.map((value,index) => {
          return (
            <div key = {index}>
              <Card
                titulo = {value}
                detalle = {data[value]}
              />
            </div>
          );
        })}
      </div>
    );
  }
}