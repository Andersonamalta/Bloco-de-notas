import React, { Component } from 'react';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import ListaDeNotas from './components/ListaDeNotas/ListaDeNotas';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      notas: []
    }
  }

  criarNota(titulo, nota) {
    const novaNota = { titulo, nota }
    const novoArrayNotas = [...this.state.notas, novaNota]
    const novoEstado = {
      notas: novoArrayNotas
    }
    this.setState(novoEstado);

  }

  render() {
    return (
      <section className='section-principal-app'>
        <FormularioCadastro criarNota={this.criarNota.bind(this)} />
        <ListaDeNotas notas={this.state.notas} />
      </section>
    );

  }

}

export default App;
