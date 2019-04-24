import React, { Component } from "react";

class HalfCard extends Component {
  matrix = {
    0: [[false, false, false], [false, false, false], [false, false, false]],
    1: [[false, false, false], [false, true, false], [false, false, false]],
    2: [[false, false, true], [false, false, false], [true, false, false]],
    3: [[false, false, true], [false, true, false], [true, false, false]],
    4: [[true, false, true], [false, false, false], [true, false, true]],
    5: [[true, false, true], [false, true, false], [true, false, true]],
    6: [[true, false, true], [true, false, true], [true, false, true]]
  };

  onClick = ev => {
    const {top, value} = this.props;
    this.props.onClick(top ? {top: value }: {bottom: value });
  };

  createHalfCard = dots => {
    let rows = [];
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        let view = dots[i][j] ? "" : "hide";
        rows.push(<div className={`dot D${i+1}${j+1} ${view}`} key= {`${i+1}${j+1}`}/>);
      }
    }
    return rows;
  };

  render() {
    let { value, isCard, top } = this.props;

    if (!value) {
      value = 0;
    }

    const dots = this.matrix[value];
   
    let classes = "half-domino";
    if (isCard) {
      classes += top ? " half-domino-part1" : " half-domino-part2";
    }

    return (
      <div className={classes} onClick={this.onClick}>
        {this.createHalfCard(dots)}
      </div>
    );
  }
}

export default HalfCard;
