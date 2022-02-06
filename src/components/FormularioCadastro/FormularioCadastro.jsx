import React, { Component } from 'react';
import './estilo.css';

class FormularioCadastro extends Component {

    constructor(props) {
        super(props);
        this.titulo = "";
        this.nota = "";
    }

    _handleMudancaTitulo(evento) {
        this.titulo = evento.target.value;
        console.log(this.titulo);
        evento.stopPropagation();
    }

    _handleTextoNota(evento) {
        this.nota = evento.target.value;
        console.log(this.nota);
        evento.stopPropagation();
    }

    _criarNota(evento){
        evento.preventDefault();
        evento.stopPropagation();
        this.props.criarNota(this.titulo, this.nota);
    }

    render() {
        return (
            <form className='formulario'
            onSubmit={this._criarNota.bind(this)}>
                <input
                    className='input-formulario'
                    type="text"
                    placeholder='Título'
                    onChange={this._handleMudancaTitulo.bind(this)}
                />
                <textarea
                    className='textarea-formulario'
                    placeholder='Digite sua nota aqui...'
                    onChange={this._handleTextoNota.bind(this)}
                />
                <button
                    className='botao-formulario'
                    type='submit'>Criar nota</button>
            </form>
        );
    }
}

export default FormularioCadastro;