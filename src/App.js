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

  // Comportements

  // Affichage (render)
  render() {
    return (
      <div className="App">
        <MyCars title={this.state.titre} />
      </div>
    );
  }
}

export default App;
