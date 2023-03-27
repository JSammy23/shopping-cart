import React from 'react'
import { useParams } from 'react-router-dom';


const ProductDetails = (props) => {

    const { id } = useParams();
    const product = props.inventory.find((item) => item.id === parseInt(id));

    if (!product) {
        return <div>Product Not Found</div>;
    }

  return (
    <div className='productDetails'>
        <img src={product.image} alt="" />
        <div className='productInfo'>
            <h2>{product.title}</h2>
            <p>${product.price}</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum sunt veritatis quisquam vero perspiciatis nemo enim sed suscipit atque modi laborum sint, dolore reprehenderit nam ducimus quis numquam tenetur quas?</p>
        </div>
    </div>
  )
}

export default ProductDetails