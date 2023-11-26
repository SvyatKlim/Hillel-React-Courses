import {useEffect, useState} from 'react'
import './App.css'
import HeroBanner from './components/HeroBanner/HeroBanner.jsx'
import {CardsSection} from "./components/CardsSection/CardsSection.jsx";
import DetailsProductsSidebar from "./components/DetailsProductsSidebar/DetailsProductsSidebar.jsx";

function App() {
    const [productsList, setProductsList] = useState([])
    const [addedProducts, setAddedProducts] = useState([]);

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
        window.addEventListener("click", handleClick);
        return () => window.removeEventListener("click", handleClick);
    }, []);


    const updatedProducts = (productId) => addedProducts.map(product => {
        if (product.productId === productId) {
            product.quantity++;
        }
        return product;
    })

    function handleAddedProducts(productId, productsQuantity) {
        const products = addedProducts;
        const productIsset = products ? products.find(product => product.productId === productId) : false;
        if (productIsset) {
            setAddedProducts(updatedProducts(productId));
        } else {
            setAddedProducts([...products, {'productId': productId, 'quantity': 1}]);
        }
    }

    console.log(addedProducts)

    function handleClick(event) {
        if (event.target.classList.contains("button-card")) {
            console.log('Added product', event.target)
        }
    }

    return (
        <>
            <DetailsProductsSidebar productList={productsList} addedProductsItems={addedProducts}/>
            <HeroBanner bgColor='bg-black' textColor="color-white"/>
            <CardsSection products={productsList} setAddedProducts={handleAddedProducts}></CardsSection>
        </>
    )
}

export default App
