import axios from "axios";
import React from "react";
import "./App.css";

class App extends React.Component {
    state = { advice: "" };

    componentDidMount() {
        this.fetchAdvice();
    }

    fetchAdvice = () => {
        axios
            .get("https://api.adviceslip.com/advice")
            .then((res) => {
                const { advice } = res.data.slip;
                this.setState({ advice });
            })
            .catch((err) => console.error(err));
    };

    render() {
        return (
            <div className="app">
                <div className="card">
                    <h1 className="heading">{this.state.advice}</h1>
                    <button className="button" onClick={() => this.fetchAdvice()}>
                        <span>I Need Advice</span>
                    </button>
                </div>
            </div>
        );
    }
}

export default App;
