import {useCallback, useEffect, useState} from 'react'
import HeroBanner from '../../components/HeroBanner/HeroBanner.jsx'
import {CardsSection} from "../../components/CardsSection/CardsSection.jsx";
import DetailsProductsSidebar from "../../components/DetailsProductsSidebar/DetailsProductsSidebar.jsx";
import {useNavigate} from "react-router-dom";
import useFetch from "../../hooks/useFetch.jsx";

function HomePage() {
    const {data, isLoading, error, refetch} = useFetch('https://655072c57d203ab6626dcdc9.mockapi.io/products');
    const [addedProducts, setAddedProducts] = useState([]);
    const [isSidebarOpen, setSidebarOpen] = useState(false)
    const navigate = useNavigate();
    useEffect(() => {
        document.addEventListener('mousedown', handleCloseSidebar)
        return () => {
            document.removeEventListener('mousedown', handleCloseSidebar)
        }
    }, [isSidebarOpen]);


    const handleTriggerSidebar =  useCallback(() => {
        return setSidebarOpen(!isSidebarOpen)
    },[]);

    function handleCloseSidebar(event) {
        if (event.target.classList.contains("sidebar-overlay")) {
            return setSidebarOpen(!isSidebarOpen)
        }
    }

    const updatedProducts = (productId) => addedProducts.map(product => {
        if (product.productId === productId) {
            product.quantity++;
        }
        return product;
    })

    function handleAddedProducts(productId, quantity) {
        const products = addedProducts;
        const productIsset = products ? products.find(product => product.productId === productId) : false;
        if (productIsset) {
            setAddedProducts(updatedProducts(productId));
        } else {
            setAddedProducts([...products, {'productId': productId, 'quantity': quantity}]);
        }
    }

    const handleNavigate = () => {
        navigate("/about");
    };
    return (
        <>
            <DetailsProductsSidebar productList={data} addedProductsItems={addedProducts}
                                    handleTriggerSidebar={handleTriggerSidebar} isSidebarOpen={isSidebarOpen}/>
            <HeroBanner bgColor='bg-black' textColor="color-white" handleNavigate={handleNavigate}/>
            <CardsSection products={data}
                          handleAddedProducts={handleAddedProducts}
                          handleTriggerSidebar={handleTriggerSidebar}
                          handleTriggerFetch={refetch}
                          isLoading={isLoading}
                          error={error}
            ></CardsSection>
        </>
    )
}

export default HomePage;
