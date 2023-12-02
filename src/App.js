import axios from "axios";
import React from "react";
import "./App.css";

class App extends React.Component {
    state = { advice: "", loading: false, imageNo: 1 };

    componentDidMount() {
        this.fetchAdvice();
    }

    fetchAdvice = () => {
        this.setState({ loading: true });
        axios
            .get("https://api.adviceslip.com/advice")
            .then((res) => {
                const { advice } = res.data.slip;
                this.setState({ advice, loading: false });
            })
            .catch((err) => {
                console.error(err);
                alert(err.message);
            });
    };

    render() {
        const randomNumber = Math.floor(Math.random() * 20) + 1;
        return (
            <div
                id="app"
                className="app"
                style={{
                    backgroundImage: `url("${process.env.PUBLIC_URL}/images/backgroundImage${this.state.imageNo}.jpeg")`,
                }}>
                <div className="card">
                    <h1 className="heading">{this.state.advice}</h1>
                    <button
                        className="button"
                        onClick={() => {
                            this.fetchAdvice();
                            this.setState({ imageNo: randomNumber });
                        }}>
                        <span>{this.state.loading ? "Loading..." : "I Need Advice"}</span>
                    </button>
                </div>
            </div>
        );
    }
}

export default App;
