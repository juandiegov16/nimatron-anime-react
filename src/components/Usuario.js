import React from "react"

export default class Usuario extends React.Component{
    render(){
        const usuario = this.props.nombre;
        return(
            <div>
                {usuario}
            </div>
        )
    }
}