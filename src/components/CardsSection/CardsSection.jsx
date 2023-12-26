import './CardsSection.scss';
import {ProductCard} from "../ProductCard/ProductCard.jsx";
import {CardButton} from "../Buttons/Buttons.jsx";
import {DefaultPreloader} from "../Preloaders/Preloaders.jsx";
import {ErrorMessage} from "../Errors/Errors.jsx";
import {useDispatch, useSelector} from "react-redux";
import {refetchProducts} from "../../redux/slices/cartSlice.js";

export const CardsSection = ({products, handleTriggerSidebar,isLoading,error}) => {
    const {totalCount} = useSelector(store => store.cart);
    const dispatch = useDispatch();


    return <section className='cards-section container'>
        <div className="card-products__order d-flex">
            <h2 className='text-center h3'> Your select {totalCount} products </h2>
            <CardButton buttonText='More Details' handler={handleTriggerSidebar} buttonUrl="" additionalClassName='more-details ml-30'/>
            <CardButton buttonText='Refetch Data in Random Order' disabled={!!isLoading} handler={() => dispatch(refetchProducts())} buttonUrl="" additionalClassName='more-details refetch'/>
        </div>
        <hr className="mt-20"/>
        <div className="card-products__wrapper">
            { !isLoading
                ?
                products.map((item) => <ProductCard key={item.id} product={item}/>)
                : <DefaultPreloader/>
            }
            {error}
            {error && <ErrorMessage message={error}/>}
        </div>
    </section>
}

