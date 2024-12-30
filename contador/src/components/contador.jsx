import { useState } from 'react';

export function Contador() {
    const [count, setCount] = useState(0);

    return (
        <div className="container">
            <button className="boton" onClick={() => setCount(count + 1)}>+</button>
            <button className="boton" onClick={() => setCount(count - 1)}>-</button>
            <h1>{count}</h1>
        </div>
    );
}
