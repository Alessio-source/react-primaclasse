import React, { Component } from 'react';

// sconsigliata la classe
export default class Button extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: "Clicca Qui"
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        if (this.state.text === "Clicca Qui") {
            this.setState({text: "Ciao"});
        } else {
            this.setState({text: "Clicca Qui"});
        }
    }

    render() {
        const { handleClick } = this;
        const { text } = this.state;
        return <button onClick={handleClick}>{text}</button>;
    }
}