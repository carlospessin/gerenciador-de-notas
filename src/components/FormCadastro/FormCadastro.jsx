import React, { Component } from "react";
import "./estilo.css";

class FormCadastro extends Component {

    constructor(props){
        super(props);
        this.titulo = "";
        this.nota = "";
    }

    _handleMudancaTitulo(event){
        event.stopPropagation();
        this.titulo = event.target.value;
    }  

    _handleMudancaNota(event){
        event.stopPropagation();
        this.nota = event.target.value;
    }  

    _enviarNota(event){
        event.preventDefault();
        event.stopPropagation();
        this.props.criarNota(this.titulo, this.nota);
    }

  render() {
    return (
      <form className="form-cadastro" onSubmit={this._enviarNota.bind(this)}>
        <input
          type="text"
          placeholder="Título"
          className="form-cadastro_input"
          onChange={this._handleMudancaTitulo.bind(this)}
        />
        <textarea
          rows={15}
          placeholder="Escreva sua nota..."
          className="form-cadastro_input"
          onChange={this._handleMudancaNota.bind(this)}
        />
        <button className="form-cadastro_input form-cadastro_submit">
          Criar Nota
        </button>
      </form>
    );
  }
}

export default FormCadastro;