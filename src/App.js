import React, { Component } from "react";
import "./App.css";
import TopBar from "./components/TopBar";
import Card from "./components/Card";
import BottomBar from "./components/BottomBar";
import RightBar from "./components/RightBar";

class App extends Component {
  state = {
    top: 0,
    bottom: 0,
    angle: 0,
    scale: 1,
    animationSpeed: 1,
    showCardBar: false
  };

  step = 90;

  performRotateLeft = () => {
    let angle = this.state.angle - this.step;
    this.setState({ angle });
  };

  performNewCard = () => {
    this.setState({ showCardBar: !this.state.showCardBar });
  };

  performRotateRight = () => {
    let angle = this.state.angle + this.step;
    this.setState({ angle });
  };

  performChooseTop = ({ top }) => {
    this.setState({ top });
  };

  performChooseBottom = ({ bottom }) => {
    this.setState({ bottom });
  };

  performScale = ({ scale }) => {
    this.setState({ scale });
  };

  performSpeed = ({ animationSpeed }) => {
    this.setState({ animationSpeed });
  };

  render() {
    const { top, bottom, scale, animationSpeed, angle, showCardBar } = this.state;
    return (
      <div className="App">
        <TopBar
          handleRotateLeft={this.performRotateLeft}
          handleRotateRight={this.performRotateRight}
          handleNewCard={this.performNewCard}
        />

        <div className="card-wrapper" id="container">
          <Card
            top={top}
            bottom={bottom}
            scale={scale}
            angle = {angle}
            animationSpeed={animationSpeed}
          />

          {showCardBar && <RightBar
            handleChooseTop={this.performChooseTop}
            handleChooseBottom={this.performChooseBottom}
          />}
        </div>

        <BottomBar
          scale={scale}
          animationSpeed={animationSpeed}
          handleScale={this.performScale}
          handleSpeed={this.performSpeed}
        />
      </div>
    );
  }
}

export default App;
