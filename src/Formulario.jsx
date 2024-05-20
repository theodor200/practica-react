// Importamos el modulo que permite ingresar valores desde el Main.jsx
import { useState } from 'react';
import PropTypes from 'prop-types';

export const Formulario = ( { 
    titulo, 
    descripcion, 
    email, 
    asunto, 
    mensaje } ) => {
        
        const [ Formulario, setFormulario ]  = useState()

        return (
            <>
                <span>{ titulo }</span>
                <p>{ descripcion }</p>

                <label>Email:</label><br/>
                <input type='email' id="text_email" className='input'/><br/><br/>

                <label>Asunto:</label><br/>
                <input type='text' id="text_asunto" className='input'/><br/><br/>

                <label>Mensaje:</label><br/>
                <input type='text' id="text_mensaje" className='input'/><br/><br/>

                <button className='button'>Cambiar</button>

                <div>
                    <span>{ email }</span><br/>
                    <span>{ asunto }</span><br/>
                    <span>{ mensaje }</span><br/>
                </div>
            </>
            )
}

//Indicamos que propiedades podemos tener

Formulario.propTypes = {
    titulo: PropTypes.string.isRequired,
    descripcion: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    asunto: PropTypes.string.isRequired,
    mensaje: PropTypes.string.isRequired
}