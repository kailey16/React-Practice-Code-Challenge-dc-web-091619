import React, { Fragment } from 'react'

const Table = (props) => {

  const renderPlates = (array) => {
    return array.map((x, index) => {
      return <div key={index} className="empty-plate" style={{ top: -7 * index }}/>
    })
  }
  
  return (
    <Fragment>
      <h1 className="remaining">
        You have: ${props.money} remaining!  
      <img className="wallet" src="https://img.freepik.com/free-vector/money-bag_16734-108.jpg?size=338&ext=jpg" alt="wallet" onClick={props.addMoney} />
      </h1>
      <div className="table">
        <div className="stack">
          { renderPlates(props.eatenSushis) }
        </div>
      </div>
    </Fragment>
  )
}

export default Table