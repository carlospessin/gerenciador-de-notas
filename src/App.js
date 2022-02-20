import ListaDeNotas from "./components/ListaDeNotas";

import { Component } from "react";
import "./assets/App.css";
import './assets/index.css';
import FormCadastro from "./components/FormCadastro/FormCadastro";

class App extends Component {
    constructor(){
        super();
        this.state = {
            notas: []
        };
    }

    criarNota(titulo, nota){
        const novaNota = {titulo, nota}
        const novoArrayNotas = [...this.state.notas, novaNota]
        const novoEstado = {
            notas: novoArrayNotas
        }
        this.setState(novoEstado)
    }

    render() {
        console.log("render");
        return (
            <section className="conteudo">
                <FormCadastro criarNota={this.criarNota.bind(this)}/>
                <ListaDeNotas notas={this.state.notas}/>
            </section>
        );
    }
}

export default App;