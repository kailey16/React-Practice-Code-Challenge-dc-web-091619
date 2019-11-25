import React from 'react'

const Sushi = (props) => {
  const { name, img_url, price } = props.sushi
  return (
    <div className="sushi">
      <div className="plate" 
           onClick={(e) => props.sushiClicked(props.sushi)}>
        { 
          props.eatenSushis.includes(props.sushi) ?
          null
          :
          <img src={require(`../imgs/sushi1.png`)} width="100%" alt={`${name}`} />
        }
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  )
}

export default Sushi