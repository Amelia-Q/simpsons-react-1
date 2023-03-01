import React, { Component } from "react";
import Name from "./Name";
import Image from "./Image";
import Quote from "./Quote";

class Character extends Component {
  render() {
    if (this.props.item.characterDirection === "Right") {
      return (
        <div className="character">
          <Name name={this.props.item.character} />
          <div className="imageQuoteContainer">
            <Quote quote={this.props.item.quote} />
            <Image image={this.props.item.image} />
          </div>
        </div>
      );
    }
    return (
      <div className="character">
        <Name name={this.props.item.character} />
        <div className="imageQuoteContainer">
          <Image image={this.props.item.image} />
          <Quote quote={this.props.item.quote} />
        </div>
      </div>
    );
  }
}

export default Character;
