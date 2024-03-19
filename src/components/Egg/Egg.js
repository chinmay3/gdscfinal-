import React, { Component } from "react";
import "./Egg.css";
import { Modal, Image } from "semantic-ui-react";
import Konami from "react-konami-code";
import PImage from "../../images/priyanshi.jpeg";
import CImage from "../../images/chinmay.jpeg";

const pCode = [
  80,
  82,
  73,
  89, //
  65, //
  78, //
  83, //
  72, //
  73,
  13
];

const cCode = [
  67, //
  72, //
  73, //
  78, //
  77, //
  65, //
  89, //
  13 //
];

export default class Egg extends Component {
  state = {
    pOpen: false,
    cOpen: false
  };

  toggleP = () => {
    this.setState(prevState => ({ pOpen: !prevState.pOpen }));
  };

  toggleC = () => {
    this.setState(prevState => ({ cOpen: !prevState.cOpen }));
  };

  render() {
    return (
      <div>
        <Konami action={this.toggleP} code={pCode} timeout={10}>
          <Modal basic open={this.state.pOpen} onClose={this.toggleP}>
            <Modal.Content image>
              <Image centered src={PImage} />
            </Modal.Content>
          </Modal>
        </Konami>

        <Konami action={this.toggleC} code={cCode} timeout={10}>
          <Modal basic open={this.state.cOpen} onClose={this.toggleC}>
            <Modal.Content image>
              <Image centered src={CImage} />
            </Modal.Content>
          </Modal>
        </Konami>
      </div>
    );
  }
}
