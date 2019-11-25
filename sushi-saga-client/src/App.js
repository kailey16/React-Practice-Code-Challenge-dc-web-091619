import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  state = {
    sushis: [],
    eatenSushis: [],
    money: 100
  }

  componentDidMount() {
    fetch(API)
    .then(res => res.json())
    .then(sushiArray => {
      this.setState({
        sushis: sushiArray
      })
    })
  }

  sushiClicked = (sushiObj) => {
    this.state.money > sushiObj.price ? (
    this.setState(pre =>
      {return {
      eatenSushis: [...pre.eatenSushis, sushiObj],
      money: pre.money - sushiObj.price
    }})) : null
  }

  render() {
    return (
      <div className="app">
        <SushiContainer sushis={this.state.sushis} sushiClicked={this.sushiClicked}  eatenSushis={this.state.eatenSushis}/>
        <Table eatenSushis={this.state.eatenSushis} money={this.state.money}/>
      </div>
    );
  }
}

export default App;