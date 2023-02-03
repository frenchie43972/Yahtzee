import { useState, useEffect } from "react";
import './Dice.css';

// This Component will generate an array of five dice to use
// and randomly rolls individual die for game play
function Dice ({numOfDice = 1}) {
    const [dice, setDice] = useState([]);

    useEffect(() => {
        setDice(Array.from({ length: numOfDice}, () => Math.floor(Math.random() * 6) + 1));
    }, [numOfDice]);

    const generateDice = () => {
        
        setDice(Array.from({ length: numOfDice}, () => Math.floor(Math.random() * 6) + 1));
    };

    
    return (
        <div>
            {dice.map((die, index) => (
                <button key={index} > Die {index + 1}: {die} </button>
            ))}
            <button onClick={generateDice}>Roll</button>
        </div>
    );
}

export default Dice;