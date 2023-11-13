import {useState} from 'react'
import './App.css'
import coursesData from './data/data.js'
import Card from "./components/Card/Card.jsx";
function App() {
    const [count, setCount] = useState(0)
    return (
        <section className="bg-black min-h-100vh pt-140">
            <div className="container" >
                <div className="card__wrapper d-flex">
                {coursesData.map((object) => <Card key={object.id} props={object} />)}
                </div>
            </div>
        </section>
    )
}

export default App