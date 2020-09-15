import React from "react"


export default class Videoscript extends React.Component {
  crearCards = () => {
    const {keys, data} = this.props;
    let card = keys.map((value) => {
      return (
          <div>
            titulo:{data[value]}
          </div>
      );
    });
    console.log(card);
  }

  render() {
    return (
      <div>
        {this.crearCards(this.props)}
      </div>
    );
  }
}