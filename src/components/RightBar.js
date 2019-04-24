import React, { Component } from "react";
import HalfCard from "./HalfCard";

class RightBar extends Component {


  render() {

    const {handleChooseTop, handleChooseBottom} = this.props;

    return (
      <div className="bar-cards column">
        <div className="top-cards row">
          {[0, 1, 2, 3, 4, 5, 6].map(elem => (
            <HalfCard value={elem} top={true} key={"top" + elem.toString()}  onClick={handleChooseTop}/>
          ))}
        </div>
        <div className="bottom-cards row">
          {[0, 1, 2, 3, 4, 5, 6].map(elem => (
            <HalfCard value={elem} top={false} key={"bottom" + elem.toString()}  onClick={handleChooseBottom}/>
          ))}
        </div>
      </div>
    );
  }
}

export default RightBar;
