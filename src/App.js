import React, { Component } from "react";
import MyCars from "./Components/Mycars";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"; // importer bootstrap
import "bootstrap/dist/js/bootstrap.bundle.js"; // importer son JS

class App extends Component {
  // State (état, donnnés, data)
  state = {
    titre: "Mon catalogue de voitures",
  };

  changeUpper = (e) => {
    this.setState({
      titre: this.state.titre.toUpperCase(),
    });
  };

  changeTitle = (e) => {
    this.setState({
      titre: "J'ai changé le titre !",
    });
  };

  // Comportements

  // Affichage (render)
  render() {
    return (
      <div className="App">
        <MyCars title={this.state.titre} />

        <button className="btn btn-success mt-1" onClick={this.changeUpper}>
          Changer le nom en dur
        </button>
        <br />
        <button className="btn btn-primary mt-1" onClick={this.changeTitle}>
          Changer titre
        </button>
      </div>
    );
  }
}

export default App;
