import React, { Component } from "react";
import { hot } from "react-hot-loader";
import Connect from "./components/connect";
import './sass/app.scss';

class App extends Component {
    state = {
        counter: 0
    };

    handleClick = () => {
        this.setState(prevState => {
            return { counter: prevState.counter + 1 };
        });
    };
    render() {
        return (
            <div className="App">
                <Connect />
            </div>
        );
    }
}
export default hot(module)(App);
