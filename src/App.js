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

  changeTitle = (titre) => {
    this.setState({
      titre: "J'ai changé le titre !",
    });
  };

  changeViaBind = (param) => {
    this.setState({
      titre: param,
    });
  };

  changeViaInput = (e) => {
    this.setState({
      titre: e.target.value,
    });
  };

  // Comportements

  // Affichage (render)
  render() {
    return (
      <div className="App">
        <MyCars title={this.state.titre} />

        <button
          className="btn btn-success mt-2"
          style={{ marginRight: "10px" }}
          onClick={this.changeUpper}
        >
          Changer le nom en dur
        </button>
        <button
          className="btn btn-danger mt-2"
          onClick={this.changeViaBind.bind(this, "Nouveau titre avec Bind")}
        >
          Titre avec Bind
        </button>
        <br />
        <button className="btn btn-primary mt-2" onClick={this.changeTitle}>
          Changer titre
        </button>
        <div className="row input-group d-flex justify-content-center mx-auto mt-2">
          <div className="col-4">
            <input
              style={{ border: "2px solid black" }}
              type="text"
              className="mb-5  form-control mt-2"
              onChange={this.changeViaInput}
              value={this.state.titre}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
