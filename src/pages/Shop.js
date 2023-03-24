import React from 'react'
import Card from '../components/Card';
import inventory from '../data/inventory'


const Shop = ({ addItem, removeItem }) => {

  return (
    <div>
        <div className="cardCont">
            {inventory.map(item => (
                <Card key={item.id} title={item.title} image={item.image} price={item.price} item={item} addItem={addItem} />
            ))}
        </div>
    </div>
  )
}

export default Shop