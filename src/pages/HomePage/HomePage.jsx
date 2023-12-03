import {useEffect, useState} from 'react'
import HeroBanner from '../../components/HeroBanner/HeroBanner.jsx'
import {CardsSection} from "../../components/CardsSection/CardsSection.jsx";
import DetailsProductsSidebar from "../../components/DetailsProductsSidebar/DetailsProductsSidebar.jsx";
import {useNavigate} from "react-router-dom";
function HomePage({isUserAuthenticated, setIsUserAuthenticated}) {
    const [productsList, setProductsList] = useState([])
    const [addedProducts, setAddedProducts] = useState([]);
    const [isSidebarOpen, setSidebarOpen] = useState(false)
    const navigate = useNavigate();


    function getProductsFromApi() {
        return fetch('https://655072c57d203ab6626dcdc9.mockapi.io/products', {
            method: 'GET',
            headers: {'content-type': 'application/json'},
        }).then(res => {
            if (res.ok) {
                return res.json();
            }
            // handle error
        }).then(data => {
            setProductsList([...data]);
        }).catch(error => {
            alert('We have Some Error !!')
        })
    }

    useEffect(() => {
        getProductsFromApi();
    }, []);

    useEffect(() => {
        document.addEventListener('mousedown', handleCloseSidebar)
        return () => {
            document.removeEventListener('mousedown', handleCloseSidebar)
        }
    }, [isSidebarOpen]);

    const handleTriggerSidebar = () => {
        return setSidebarOpen(!isSidebarOpen)
    }

    const updatedProducts = (productId) => addedProducts.map(product => {
        if (product.productId === productId) {
            product.quantity++;
        }
        return product;
    })

    function handleCloseSidebar(event) {
        if (event.target.classList.contains("sidebar-overlay")) {
            return setSidebarOpen(!isSidebarOpen)
        }
    }

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
            <DetailsProductsSidebar productList={productsList} addedProductsItems={addedProducts}
                                    handleTriggerSidebar={handleTriggerSidebar} isSidebarOpen={isSidebarOpen}/>

            <HeroBanner bgColor='bg-black' textColor="color-white" handleNavigate={handleNavigate}/>

            <CardsSection products={productsList} handleAddedProducts={handleAddedProducts}
                          handleTriggerSidebar={handleTriggerSidebar}></CardsSection>
        </>
    )
}

export default HomePage;
