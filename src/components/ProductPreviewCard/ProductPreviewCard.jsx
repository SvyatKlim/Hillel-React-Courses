import './ProductPreviewCard.scss';
import {QuantityButton, RemoveItemButton} from "../Buttons/Buttons.jsx";
import {useDispatch} from "react-redux";
import {decrement, increment, removeItemFromCart} from "../../redux/slices/cartSlice.js";
import MinusIcon from "../../assets/pictures/minus.svg?react";
import PlusIcon from "../../assets/pictures/plus.svg?react";

export const ProductPreviewCard = ({product}) => {
    const dispatch = useDispatch();
    const {id, thumbnail, title, price, priceWithoutDiscount, quantity} = product;
    return <div className='card-product-preview'>
        <figure className="card-product-preview__img__wrapper d-flex">
            <img className='card-product-preview__img' src={thumbnail} alt={title}/>
        </figure>
        <div className="card-product-preview__controls">
            <div className="card-product-preview__info">
                <h5 className="">{title}</h5>
                <p className="price fw-700 mt-0 mb-0"> ${price} <strike>${priceWithoutDiscount}</strike></p>
            </div>
            <div className="card-product-preview__controls__counter">
                <QuantityButton handler={() => dispatch(decrement(id))} text={<MinusIcon/>}/>
                <h4 className="card-product-preview__controls__counter__title"> {quantity} </h4>
                <QuantityButton handler={() => dispatch(increment(id))} text={<PlusIcon/>}/>
            </div>
            <RemoveItemButton handler={() => dispatch(removeItemFromCart(id))}/>
        </div>
    </div>
}