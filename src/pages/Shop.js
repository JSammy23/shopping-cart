import React from 'react'
import Card from '../components/Card';
import Young from '../assets/images/youngPuss.avif';
import Sweater from '../assets/images/sweater.avif';


const Shop = () => {

    const inventory = [
        { title: 'Young Puss', image: Young, price: 24.99 },
        { title: 'Sweater Weather', image: Sweater, price: 30 }
    ]

  return (
    <div>
        <div className="cardCont">
            {inventory.map(item => (
                <Card title={item.title} image={item.image} price={item.price} />
            ))}
        </div>
    </div>
  )
}

export default Shop