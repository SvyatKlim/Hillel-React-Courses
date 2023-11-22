import {useEffect, useState} from 'react'
import './App.css'
import HeroBanner from './components/HeroBanner/HeroBanner.jsx'
import {CardsSection} from "./components/CardsSection/CardsSection.jsx";

function App() {
    const [products,setProducts] = useState([])
    function getProductsFromApi() {
        return fetch('https://655072c57d203ab6626dcdc9.mockapi.io/products', {
            method: 'GET',
            headers: {'content-type':'application/json'},
        }).then(res => {
            if (res.ok) {
                return res.json();
            }
            // handle error
        }).then(data => {
            setProducts([...data]);
        }).catch(error => {
            alert('We have Some Error !!')
        })
    }
    // Тут довелось все ж таки обернути запит в UseEffect тому що без нього виконується багато запитів і отримуж 429 Error too many request
    useEffect(() => {
        getProductsFromApi();
    }, []);

    return (
        <>
            <HeroBanner bgColor='bg-black' textColor="color-white"/>
            <CardsSection products={products}></CardsSection>
        </>
    )
}

export default App
