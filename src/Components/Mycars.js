import React from "react";
import Car from "./Cars";

class MyCars extends React.Component {
    noCopy = () => {
        alert("Voler c'est mal !");
    };

    addStyle = (e) => {
        if (e.target.classList.contains("style")) {
            e.target.classList.remove("style");
        } else {
            e.target.classList.add("style");
        }
    };

    render() {
        return (
            <div>
                <h1 onMouseOver={this.addStyle}>{this.props.title}</h1>
                <p onCopy={this.noCopy}>
                    Un texte que je ne devrais pas pouvoir copier
                </p>
                <Car color="blue">Peugeot</Car>
                <Car color="">Toyota</Car>
                <Car color="green"></Car>
            </div>
        );
    }
}

export default MyCars;
