import {useReducer} from 'react'
import './App.css'
import {Button} from "./Components/Button.jsx";
import {DECREMENT_COUNT, INCREMENT_COUNT, reducer, RESET_COUNT} from "./context/appReducer.js";


function App() {
    const [state, dispatch] = useReducer(reducer, {count: 0});
    const handlerIncrement = () => dispatch({type: INCREMENT_COUNT});
    const handlerDecrement = () => dispatch({type: DECREMENT_COUNT});
    const handlerReset = () => dispatch({type: RESET_COUNT});
    return (
        <section className="container">
            <h1 className="title"> Custom Counter </h1>
            <h2 className="count-val">{state.count}</h2>
            <div className="button__wrapper">
                <Button name="increment" action={handlerIncrement}/>
                <Button name="decrement" action={handlerDecrement}/>
                <Button name="reset" action={handlerReset}/>
            </div>
        </section>
    )
}

export default App
