import React, { Component, PropTypes } from 'react';
import { Motion, spring } from 'react-motion';
import Pointable from 'react-pointable';

const noop = () => {};

class PaginationMotion extends Component {
  constructor(props) {
    super(props);
    this.state = {disabled: true, percent:0, page:0, start:null};
  }
  onEnd({x}) {
    if (!this.state.start) return;

    const {width, total} = this.props;
    const {percent, page, start} = this.state;
    const lock = (start - x > 1 ? Math.min(page+1,total-1) : Math.max(0, page-1));

    this.setState({percent:lock, start:null, page:lock, disabled: true});
  }
  onMove({x}) {
    const {width,total} = this.props;
    let {start, page} = this.state;
    if (!start) {
      start = x;
      this.setState({start})
    }

    let newPercent = (start - x) / width;

    const isAtMaxThreshold = page === total-1;
    const isMinThreshold = page === 0;
    if (isAtMaxThreshold) {
      newPercent = Math.min(newPercent, 0);
    } else if (isMinThreshold) {
      newPercent = Math.max(newPercent, 0);
    }

    this.setState({x, percent:page + newPercent});
  }
  render() {
    const {disabled, percent, page} = this.state;
    const {children} = this.props;
    return <Pointable onPointerDown={() => this.setState({disabled:false})}
                      onPointerMove={disabled ? noop : this.onMove.bind(this)}
                      onPointerUp={this.onEnd.bind(this)}
                      onPointerCancel={this.onEnd.bind(this)}
                      onPointerLeave={this.onEnd.bind(this)}>
      <Motion defaultStyle={{percent:0}} style={{percent: spring(percent, {stiffness: 75})}}>
        {(value) => children({percent:value.percent, page})}
      </Motion>
    </Pointable>
  }
}

export default PaginationMotion;