import React from 'react'
import '../components/styles/Card.Styles.css'
import { Link } from 'react-router-dom';

const Card = ({ title, image, price, addItem, item }) => {

  const handleClick = () => {
    addItem(item);
  };

  return (
    <>
      <div className="cardCont">
          <div className='card' >
            <Link to={`/products/${item.id}`} >
              <img  src={image} alt="Character" className='card-img' />
              <h2 className='title'>{title}</h2>
            </Link>
            <p className='price'>${price}</p>
            <div>
              <button onClick={handleClick} className='addBtn fill'>Add To Cart</button>
            </div>
          </div>
        </div>
    </>
  )
}

export default Card