import { useState, useEffect } from "react";
import './Dice.css';

// This Component will generate an array of dice to use
// and randomly rolls individual die for game play
function Dice ({numOfDice = 1}) {
    const [dice, setDice] = useState([]);

    // The useEffect hook sets the initial state of 'dice'
    // It uses the Array.from() method to create a new instance from the
    // dice array with a random number from 1 - 6
    useEffect(() => {
        setDice(Array.from({ length: numOfDice}, () => Math.floor(Math.random() * 6) + 1));
        // [numOfDice] is a dependency array that, if changed, will re-execute
        // useEffect and update the dice piece of state. 
    }, [numOfDice]);

    // The generateDice function is a callback function tha when called, updates
    // the dice piece of state with a new set of random numbers 
    const generateDice = () => {
        
        setDice(Array.from({ length: numOfDice}, () => Math.floor(Math.random() * 6) + 1));
    };

    return (
        <div>
            {/* Maps over dice and creates a "Die" for each item in the array */}
            {/* The die argument stores the current value and the index argument provides the current index */}
            {dice.map((die, index) => (
                <button key={index} > Die {index + 1}: {die} </button>
            ))}
            {/* generateDice is passed as a click handler for the button */}
            <button onClick={generateDice}>Roll</button>
        </div>
    );
}

// When importing and using this component, you have to call
// the numOfDice prop and pass how many dice you want
// i.e, numOfDice{5} will produce five "Dice" buttons with 
// different random numbers assigned to each.
export default Dice;