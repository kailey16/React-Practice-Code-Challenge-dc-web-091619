import React, { Component, Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

class SushiContainer extends Component{
  state = {
    sushisI: 0
  }

  moreSushis = () => {
    this.setState(pre => {
      return pre.sushisI <= this.props.sushis.length - 8 ?
      ({sushisI: pre.sushisI + 4}) : ({sushisI: 0})
    })
  }

  render() {
    return (
    <Fragment>
      <div className="belt">
        {
          this.props.sushis.slice(this.state.sushisI, this.state.sushisI + 4).map(sushi => {
          return <Sushi
                    key={sushi.id}
                    sushi={sushi} 
                    sushiClicked={this.props.sushiClicked}
                    eatenSushis={this.props.eatenSushis} />})
        }
        <MoreButton moreSushis={this.moreSushis}/>
      </div>
    </Fragment>  
    )
  }
}

export default SushiContainer