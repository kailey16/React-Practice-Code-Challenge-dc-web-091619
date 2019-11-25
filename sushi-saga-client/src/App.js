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
    return this.state.money >= sushiObj.price ? (
      this.state.eatenSushis.includes(sushiObj) ? alert(`You already ate ${sushiObj.name}!`) :
      (this.setState(pre =>
        { return {
                  eatenSushis: [...pre.eatenSushis, sushiObj],
                  money: pre.money - sushiObj.price
                }
        }
      ))) : null
  }

  addMoney = () => {
    this.setState(pre => {
      return {
        money: pre.money + 50
      }
    })
  }

  render() {
    return (
      <div className="app">
        <SushiContainer sushis={this.state.sushis} sushiClicked={this.sushiClicked}  eatenSushis={this.state.eatenSushis}/>
        <Table eatenSushis={this.state.eatenSushis} money={this.state.money} addMoney={this.addMoney} />
      </div>
    );
  }
}

export default App;