import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Pagination from './components/Pagination';
import paginationData from './data/pagination.json'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {width:window.innerWidth, height:window.innerHeight};
  }
  componentDidMount() {
    window.onresize = () => {this.setState({width:window.innerWidth, height:window.innerHeight})}
  }
  render() {
    const {width,height} = this.state;
    return (
      <div className="App">
        <Pagination panels={paginationData} width={width} height={height}></Pagination>
      </div>
    );
  }
}

export default App;
