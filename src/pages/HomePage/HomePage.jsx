import {useCallback, useEffect, useState} from 'react'
import HeroBanner from '../../components/HeroBanner/HeroBanner.jsx'
import {CardsSection} from "../../components/CardsSection/CardsSection.jsx";
import DetailsProductsSidebar from "../../components/DetailsProductsSidebar/DetailsProductsSidebar.jsx";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchProducts} from "../../redux/slices/cartSlice.js";
import {triggerSidebar} from "../../redux/slices/globalSlice.js";

function HomePage() {
    const dispatch = useDispatch();
    const {products, isLoading, isError} = useSelector(store => store.cart);
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    const handleTriggerSidebar = useCallback(() => {
        return dispatch(triggerSidebar());
    }, []);

    return (
        <>
            <DetailsProductsSidebar handleTriggerSidebar={handleTriggerSidebar}/>
            <HeroBanner bgColor='bg-black' textColor="color-white" handleNavigate={() => navigate("/about")}/>
            <CardsSection products={products}
                          handleTriggerSidebar={handleTriggerSidebar}
                          isLoading={isLoading}
                          error={isError}
            ></CardsSection>
        </>
    )
}

export default HomePage;
