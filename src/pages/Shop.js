import React from 'react'
import Card from '../components/Card';
import Young from '../assets/images/youngPuss.avif';
import Sweater from '../assets/images/sweater.avif';
import Shades from '../assets/images/shades.avif';
import Wizard from '../assets/images/wizard.avif';
import Gary from '../assets/images/gary.webp';
import Gown from '../assets/images/tie&gown.jpg';


const Shop = () => {

    const inventory = [
        { title: 'Young Puss', image: Young, price: 24.99 },
        { title: 'Sweater Weather', image: Sweater, price: 30 },
        { title: 'Shades', image: Shades, price: 14.99 },
        { title: "You're a Wizard Fluffy!", image: Wizard, price: 22.99 },
        { title: 'The Gary', image: Gary, price: 19.99 },
        { title: 'The Graduate', image: Gown, price: 24.99 }
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