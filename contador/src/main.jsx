import { createRoot } from 'react-dom/client';

import { Contador } from './components/contador.jsx';

import "./assets/styles.css";
createRoot(document.getElementById('root')).render(
    <Contador/>
);
