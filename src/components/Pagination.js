import React, { Component, PropTypes } from 'react';
import Panel from './Panel';
import PaginationMotion from "./PaginationMotion";

class Pagination extends Component {
  render() {
    const {panels} = this.props;

    const width = 300;
    const idx = 0;

    return (
      <div className="Pagination" style={{width, height: 500, position: "relative", overflow:"hidden"}}>
       <PaginationMotion width={width} total={panels.length}>
          {(percent) => (
            <div style={{width: "100%", height:"100%", position: "absolute", top: 0}}>
              <div style={{left: -(width * percent), width: "100%", height:"100%", position: "absolute", top: 0, display:"flex", flexDirection: "row"}}>
                {panels.map((panelProps, idx) => (
                  <Panel key={idx} {...{...panelProps, percent}} />
                ))}
                {/* calculate the percentage of the animation */}
              </div>
            </div>)}
        </PaginationMotion>
      </div>
    );
  }
}

Pagination.propTypes = {
  panels: PropTypes.arrayOf(PropTypes.shape({
    linearGradient: PropTypes.string,
    title: PropTypes.string,
    subhead: PropTypes.string,
    icon: PropTypes.string
  }))
}

export default Pagination;
