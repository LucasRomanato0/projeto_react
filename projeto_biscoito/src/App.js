import React, { Component } from "react";
import biscoito from "./assets/biscoito.png";
import "./style.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      frase: "",
    };
    this.quebraBiscoito = this.quebraBiscoito.bind(this);

    this.frases = [
      "Frase 1",
      "Frase 2",
      "Frase 3",
      "Frase 4",
      "Frase 5",
      "Frase 6",
    ];
  }

  quebraBiscoito() {
    let state = this.state;
    let numAleatorio = Math.floor(Math.random() * this.frases.length);

    state.frase = '"' + this.frases[numAleatorio] + '"';

    this.setState(state);
  }

  render() {
    return (
      <div className="container">
        <img src={biscoito} className="img" />
        <Botao nome="Abrir biscoito" acaoBtn={this.quebraBiscoito} />
        <h3 className="textoFrase">{this.state.frase}</h3>
      </div>
    );
  }
}

class Botao extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.acaoBtn}>{this.props.nome}</button>
      </div>
    );
  }
}

export default App;
