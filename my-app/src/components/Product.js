import './product.css'

const Product=({product,price,image})=>{
    console.log(image);
    return (
        <div className='product-item'>
            <div className="product__item__description ">Product: {product}</div>
            <div className="product__item__price"> Price: {price}</div>
            <img src={image} className="product__item__image" alt={"shir"}/>
        </div>
    );
}

export default Product;