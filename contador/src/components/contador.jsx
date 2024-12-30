import { useState } from 'react';

export function Contador() {
    const [count, setCount] = useState(0);

    return (
        <div className="container">
            <div className='container-buttons'>
                <button className="boton" onClick={() => setCount(count + 1)}>+</button>
                <button className="boton" onClick={() => setCount(count - 1)}>-</button>
            </div>
            <div className="container-count">
                <h1>{count}</h1>
            </div>
        </div>
    );
}
