import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import { CounterApp } from './CounterApp'
import { MessageApp } from './MessageApp';

ReactDOM.createRoot( document.getElementById('root') ).render(
    <React.StrictMode>
        <CounterApp value={ 100 } />
        <MessageApp 
            titulo="Correo con con mensajes"
            remitente='theodorcardenas@gmail.com'
            mensaje='Este es un correo personalizado'
        />
    </React.StrictMode>
)