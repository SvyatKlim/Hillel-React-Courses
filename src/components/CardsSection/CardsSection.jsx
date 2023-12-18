import './CardsSection.scss';
import { useState} from "react";
import {ProductCard} from "../ProductCard/ProductCard.jsx";
import {CardButton} from "../Buttons/Buttons.jsx";
import {DefaultPreloader} from "../Preloaders/Preloaders.jsx";
import {ErrorMessage} from "../Errors/Errors.jsx";

export const CardsSection = ({products, handleAddedProducts, handleTriggerSidebar,handleTriggerFetch,isLoading,error}) => {
    const [counterVal, setCounterVal] = useState(0);

    const changeTotalQuantity = (quantity,productId) => {
        setCounterVal(counterVal + quantity);
        handleAddedProducts(productId,quantity)
    }

    return <section className='cards-section container'>
        <div className="card-products__order d-flex">
            <h2 className='text-center h3'> Your select {counterVal} products </h2>
            <CardButton buttonText='More Details' handler={handleTriggerSidebar} buttonUrl="" additionalClassName='more-details ml-30'/>
            <CardButton buttonText='Refetch Data in Random Order' disabled={isLoading ? true : false} handler={handleTriggerFetch}  buttonUrl="" additionalClassName='more-details refetch'/>
        </div>
        <hr className="mt-20"/>
        <div className="card-products__wrapper">
            { !isLoading
                ?
                products.map((item) => <ProductCard key={item.id} setCounterValue={changeTotalQuantity} product={item}/>)
                : <DefaultPreloader/>
            }
            {error}
            {error && <ErrorMessage message={error}/>}
        </div>
    </section>
}

