import React, { Component } from "react";
import axios from "axios";
import Character from "./components/Character";
import "./App.css";

class App extends Component {
  state = {};

  async componentDidMount() {
    const results = await axios.get(
      `https://thesimpsonsquoteapi.glitch.me/quotes?count=50`
    );

    this.setState({ simpsons: results.data });
  }

  render() {
    console.log(this.state);

    const { simpsons } = this.state;

    if (!simpsons) {
      return <h1>Waiting for data....</h1>;
    }

    //if data is here, loop over the data
    //think defensive check

    return (
      <>
        {this.state.simpsons.map((item) => {
          return <Character item={item} />;
        })}
      </>
    );
  }
}

export default App;
