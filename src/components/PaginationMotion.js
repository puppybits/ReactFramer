import React, { Component, PropTypes } from 'react';
import { Motion, spring } from 'react-motion';
import Pointable from 'react-pointable';

const noop = () => {};

class PaginationMotion extends Component {
  constructor(props) {
    super(props);
    // TODO: remove x
    this.state = {disabled: true, x: 50, percent:0, index:0};
  }
  setDisabled(disabled) {
    this.setState({disabled});
  }
  onEnd() {
    const {width} = this.props;
    const {percent} = this.state;
    const lock = (percent > 0.5 ? 1 : 0);

    this.setState({percent:lock});
  }
  onMove({x}) {
    // 1. add interpolation from the x to the percent
    // use total to create offset and set page index
    const {width,total} = this.props;
    console.log(total);
    // this.setState({x, percent:x / width});
    this.setState({x, percent:1 - (x / width)});
  }
  render() {
    const {disabled, x, percent, index} = this.state;
    const {children} = this.props;
    return <Pointable onPointerDown={() => this.setDisabled(false)}
                      onPointerMove={disabled ? noop : this.onMove.bind(this)}
                      onPointerUp={() => {this.onEnd(); this.setDisabled(true)}}
                      onPointerCancel={() => this.setDisabled(true)}
                      onPointerLeave={() => {this.onEnd(); this.setDisabled(true)}}>
      <Motion defaultStyle={{percent:0}} style={{percent: spring(percent, {stiffness: 75})}}>
        {({percent,index}) => children(percent,index)}
      </Motion>
    </Pointable>
  }
}

export default PaginationMotion;
