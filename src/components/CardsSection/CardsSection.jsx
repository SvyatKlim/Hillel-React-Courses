import './CardsSection.scss';
import {useState} from "react";
import {ProductCard} from "../ProductCard/ProductCard.jsx";

export const CardsSection = ({products}) => {
    const [counterVal, setCounterVal] = useState(0);
    // const [idVal, setProductId] = useState([]);
        function addProductToCart(quantity) {
            setCounterVal(counterVal + quantity);
        }
    return <section className='cards-section container'>
        <div className="card-products__order d-flex">
            <h2 className='text-center h3'> Your select {counterVal} products </h2>
        </div>
        <hr/>
        <div className="card-products__wrapper">
            {products.map((item) =>
                <ProductCard key={item.id} setCounterValue={addProductToCart} product={item}/>
            )}
        </div>
    </section>
}

