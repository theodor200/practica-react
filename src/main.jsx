import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import { CounterApp } from './CounterApp'
import { MessageApp } from './MessageApp';

import { Formulario } from './Formulario';

ReactDOM.createRoot( document.getElementById('root') ).render(
    <React.StrictMode>
        <CounterApp value={20} />
    </React.StrictMode>
)