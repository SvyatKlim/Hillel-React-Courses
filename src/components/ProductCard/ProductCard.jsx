import './ProductCard.scss';
import {CardButton, QuantityButton} from "../Buttons/Buttons.jsx";
import {useState} from "react";
import MinusIcon from '../../assets/pictures/minus.svg?react'
import PlusIcon from '../../assets/pictures/plus.svg?react'
import {useDispatch} from "react-redux";
import {addToCart} from "../../redux/slices/cartSlice.js";

export const ProductCard = ({product}) => {
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(1);
    const { category, description, discountPercentage, price, thumbnail, title} = product;
    const priceWithoutDiscount = Math.trunc(price + ((price / 100) * discountPercentage))

    const handlerButtonAddToCartClick = () => {
        dispatch(addToCart({...product, quantity: quantity}));
        setQuantity(1)
    };
    const handlerIncreaseQuantity = () => setQuantity(quantity + 1);
    const handlerDecreaseQuantity = () => setQuantity(quantity >= 2 ? quantity - 1 : 1);

    return <div className='card-product'>
        <div className="card-product__main">
            <div className="card-product__img__wrapper d-flex">
                <div className="card-product__img__discount">{Math.trunc(discountPercentage)}%</div>
                <img className='card-product__img' src={thumbnail} alt={title}/>
            </div>
            <div className="card-product__info">
                <div className="card-product__info__main">
                    <p className="caption">{category}</p>
                    <h5 className="">{title}</h5>
                    <p className="mb-20">{description}</p>
                </div>
                <p className="price fw-700 mt-0 mb-0"> ${price} <strike>${priceWithoutDiscount}</strike></p>
            </div>
        </div>
        <div className="card-product__quantity mb-20">
            <QuantityButton handler={handlerDecreaseQuantity} text={<MinusIcon/>}/>
            <span className="h5 card-product__quantity__val">{quantity}</span>
            <QuantityButton handler={handlerIncreaseQuantity} text={<PlusIcon/>}/>

        </div>
        <CardButton handler={handlerButtonAddToCartClick} additionalClassName='counter-button'
                    buttonText='Add to Cart'/>

    </div>
}

