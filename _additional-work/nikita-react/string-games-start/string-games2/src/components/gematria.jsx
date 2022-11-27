import { useEffect, useRef, useState } from "react";
import { calculateGematriaValue } from "../utils/gematria";

export function Gematria() {
    // const [inputValue, setInputValue] = useState(' ');
    // const handleInputChange = (event) => {
        //     setInputValue(event.target.value);
        // };
        const [points, setPoints] = useState('0');
        const input = useRef();
        const handleButtonClick = () => {
            const value = input.current.value;
            const calculatedPoints = calculateGematriaValue(value);
            setPoints(calculatedPoints);
        };
        const [click, setClick] = useState(false)
        
        useEffect(() => {
            console.log("points recalculated");
        }, [points])
    return (
        <div className="gematria">
        {click ? <p>yes</p> : <p>no</p>}
        <button onClick={() => setClick(!click)}>asd</button>
            <h2>גימטריה</h2>
            <div className="gem-container">
                <input ref={input} type='text' className="gem-input" placeholder="שלןם" />
                <button onClick={handleButtonClick} className="gem-calc">Calculate</button>
                <div className="res-calc">{points}</div>
            </div>
            <p className="desc">"Gematryia" is the word numerical value calculation while summarizing the values of the letters of Hebrew alphabet. Enter your name in Hebrew and press the button - get value.</p>
        </div>);
}