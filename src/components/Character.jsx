import React, { Component } from "react";
import Name from "./Name";
import Image from "./Image";
import Quote from "./Quote";

class Character extends Component {
  render() {
    return (
      <>
        <Name name={this.props.item.character} />
        <Quote quote={this.props.item.quote} />
        <Image image={this.props.item.image} />
      </>
    );
  }
}

export default Character;
