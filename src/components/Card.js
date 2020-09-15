import React from 'react'

export default class Card extends React.Component{
    render(){
        return(
            <div className="card rounded">
                <iframe
                    src={this.props.detalle["src"]}
                    className="card-img-top"
                    alt="..."
                    title={this.props.titulo}
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
                <div className="card-body">
                    <h5 className="card-title">{this.props.titulo}</h5>
                    <p className="card-text">
                    <br />
                    Opening
        <br /> <i>{this.props.detalle["artist"]} - {this.props.detalle["songname"]}</i>
                    </p>
                </div>
            </div>
        )
        }
}