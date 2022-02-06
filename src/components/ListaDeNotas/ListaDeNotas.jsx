import React, { Component } from "react";
import CardNota from "../CardNota/CardNota";
import './estilo.css';

class ListaDeNotas extends Component {
    render() {
        return (
            <ul className="ul-lista">

                {this.props.notas.map((nota, index) => {
                    return (
                        <li key={index}>
                            
                            <CardNota titulo={nota.titulo} texto={nota.nota}/>
                        </li>
                    );
                })}

            </ul>
        );
    }
}

export default ListaDeNotas;