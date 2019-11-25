import React from 'react'


// {
//   "id": 1,
//   "name": "Tako Supreme",
//   "img_url": "https://sushistickers.com/img/sushi-slice_99.png",
//   "price": 20,
//   "created_at": "2018-07-27T18:53:16.241Z"
//   }

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