import React from "react"
import Card from './Card'


export default class Videoscript extends React.Component {


  render() {
    const {keys, data} = this.props;
    return (
      <div className="content card-deck row-cols-4 justify-content-center">
        {keys.map((value, index) => {
          return (
            <div key={index}>
              <Card detalle={data[value]} />
            </div>
          );
        })}
      </div>
    );
  }
}