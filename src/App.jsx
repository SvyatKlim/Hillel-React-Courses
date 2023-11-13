import {useState} from 'react'
import './App.css'
import HeroBanner from './components/HeroBanner/HeroBanner.jsx'
function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <HeroBanner bgColor='bg-black' textColor="color-white"/>
        </>
    )
}

export default App
