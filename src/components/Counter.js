import React, { useState } from 'react';

const Counter = () => {

    const [counter, setCounter] = useState(0);

    return (
        <div>
            <button
                onClick={() => setCounter(counter+1)}
                data-testid="counter-button"
            >
                { counter }
            </button>
        </div>
    )
}

export default Counter;