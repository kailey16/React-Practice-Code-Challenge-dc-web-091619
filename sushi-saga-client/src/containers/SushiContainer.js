import React, { Component, Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

class SushiContainer extends Component{
  state = {
    sushisI: 0
  }

  moreSushis = () => {
    this.setState(pre => {
      return {
        sushisI: pre.sushisI + 4
      }
    })
  }

  render() {
    return (
    <Fragment>
      <div className="belt">
        {
          this.props.sushis.slice(this.state.sushisI, this.state.sushisI + 4).map(sushi => {
          return <Sushi
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