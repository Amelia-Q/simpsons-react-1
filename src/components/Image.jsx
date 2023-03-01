import React, { Component } from "react";

class Image extends Component {
  render() {
    return <img className="image" src={this.props.image} />;
  }
}

export default Image;
