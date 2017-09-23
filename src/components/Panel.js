import React, { Component, PropTypes } from 'react';
import { Motion, spring } from 'react-motion';
import drop from '../assets/drop.svg';
import palette from '../assets/palette.svg';
import dropper from '../assets/dropper.svg';

const iconSources = {drop, palette, dropper}

class Panel extends Component {
  render() {
    const {index, page: activePage, title, subhead, linearGradient, buttonGradient, icon, percent, x, width} = this.props;
    let springStep = -(activePage - index) * 200
    return (
      <div className="Panel" style={{display: "flex", flexWrap: "wrap", height: "100%"}}>
        <div style={{width:width, height:"50%", overflow: "hidden"}}>
          <Motion defaultStyle={{x:0}} style={{x: spring(springStep, {stiffness: 200})}}>
            {({x}) =>
              (<div style={{position: "relative", left:x, display:"flex", flexDirection:"column", alignItems: "center", width: "100%", paddingTop: 40}}>
                  <div style={{width: 30, height: 30, borderRadius: "50% 50%", background: buttonGradient, color:"white", display:"flex", alignItems:"center", justifyContent:"center"}}>
                    {index+1}
                  </div>
                </div>)}
          </Motion>
          <Motion defaultStyle={{x:50}} style={{x: spring(springStep, {stiffness: 160})}}>
            {({x}) =>
                (<h1 style={{position: "relative", left:x}}>{title}</h1>)}
          </Motion>
          <Motion defaultStyle={{x:100}} style={{x: spring(springStep, {stiffness: 120})}}>
            {({x}) =>
                (<h3 style={{position: "relative", left:x}}>{subhead}</h3>)}
          </Motion>
        </div>
        <div style={{background: linearGradient, width: "100%", height: "50%", display: "flex", alignItems: "center", justifyContent: "center"}}>
          <img src={iconSources[icon]} style={{width: 50, }}/>
        </div>
      </div>
    );
  }
}

Panel.propTypes = {
  index: React.PropTypes.number,
  linearGradient: PropTypes.string,
  buttonGradient: PropTypes.string,
  title: PropTypes.string,
  subhead: PropTypes.string,
  icon: PropTypes.string,
  x: PropTypes.number,
  percent: PropTypes.number
}

export default Panel;
