import React, { Component, PropTypes } from 'react';
import { Motion, spring } from 'react-motion';

class Panel extends Component {
  render() {
    const {index, title, subhead, linearGradient, percent, x} = this.props;
    // add react motion to animate the top 3 elements each with a different stiffness
    return (
      <div className="Panel" style={{display: "flex", flexWrap: "wrap", height: "100%"}}>
        <div style={{width:"100%", height:"50%"}}>
          <div style={{display:"flex", flexDirection:"column", alignItems: "center", width: "100%"}}>
            <div style={{width: 30, height: 30, borderRadius: "50% 50%", background: linearGradient, color:"white", display:"flex", alignItems:"center", justifyContent:"center"}}>
              {index}
            </div>
          </div>
          <h1>{title}</h1>
          <h3>{subhead}</h3>
        </div>
        <div style={{background: linearGradient, width: 300, height: "50%"}}></div>
      </div>
    );
  }
}

Panel.propTypes = {
  index: React.PropTypes.number,
  linearGradient: PropTypes.string,
  title: PropTypes.string,
  subhead: PropTypes.string,
  icon: PropTypes.string,
  x: PropTypes.number,
  percent: PropTypes.number
}

export default Panel;
