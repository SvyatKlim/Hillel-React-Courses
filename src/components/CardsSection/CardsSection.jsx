import './CardsSection.scss';
import {useEffect, useState} from "react";
import {ProductCard} from "../ProductCard/ProductCard.jsx";
import {CardButton} from "../Buttons/Buttons.jsx";

export const CardsSection = ({products, handleAddedProducts, handleTriggerSidebar, getProductsQuantity}) => {
    const [counterVal, setCounterVal] = useState(0);

    const changeTotalQuantity = (quantity,productId) => {
        setCounterVal(counterVal + quantity);
        handleAddedProducts(productId,quantity)
    }
    //
    // useEffect(() => {
    //     getProductsQuantity(counterVal)
    // }, [counterVal]);

    return <section className='cards-section container'>
        <div className="card-products__order d-flex">
            <h2 className='text-center h3'> Your select {counterVal} products </h2>
            <CardButton buttonText='More Details' handler={handleTriggerSidebar} additionalClassName='more-details ml-30'/>
        </div>
        <hr/>
        <div className="card-products__wrapper">
            {products.map((item) =>
                <ProductCard key={item.id} setCounterValue={changeTotalQuantity} product={item}/>
            )}
        </div>
    </section>
}

