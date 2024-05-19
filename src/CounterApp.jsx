//Hooks, estado de componentes
import { useState } from 'react'
import PropTypes from 'prop-types'


export const CounterApp = ({ value }) => {

    //Hook State [variable, funcion para cambiar la variable] = useState (Valor inicial)
    console.log(useState)
    const [ counter, setCounter ] = useState( value );

    const Incrementar = () => {
        setCounter( counter + 1)
    }

    return (
        <>
            <h1>CounterApp</h1>
            <p>Value desde el padre { value }</p>
            <p>Desde el estado { counter }</p>

            <button class="button" onClick={ Incrementar }>
                +1
            </button>
        </>
    );
}

CounterApp.propType = {
    value: PropTypes.number.isRequired
}