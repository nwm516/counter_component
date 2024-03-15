import { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    // "Increment": Increment by 1
    const increment = () => setCount(prevCount => prevCount + 1);

    // "Increment After Delay": Increment by 1 after 2 sec. delay
    const handleClick = () => {
        setTimeout(() => {
            setCount(prevCount => prevCount + 1);
        }, 2000);
    };

    // "Increment Twice": Attempts to increment count by 2 immediately
    const incrementTwice = () => {
        setCount(count + 1);
        setCount(count + 1);
    };

    const correctIncrementTwice = () => {
        setCount(prevCount => prevCount + 1);
        setCount(prevCount => prevCount + 1);
    };

    return (
        <>
        <p><br></br>{count}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={handleClick}>Increment After Delay</button>
        <button onClick={incrementTwice}>Increment Twice</button>
        <button onClick={correctIncrementTwice}>Correct Increment Twice</button>
        </>
    );
};

export default Counter;