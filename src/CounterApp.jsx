//Hooks, estado de componentes
import { useState } from 'react'
import PropTypes from 'prop-types'


export const CounterApp = ({ value }) => {

    //Hook State [variable, funcion para cambiar la variable] = useState (Valor inicial)
    const [ counter, setCounter ] = useState( value );

    const Incrementar = () => {
        setCounter( counter + 1)
    }

    const Decrementar = () => {
        setCounter( counter - 1)
    }

    const Reset = () => {
        setCounter( value )
    }
 
    return (
        <>
            <h1>CounterApp</h1>
            <p>Value desde el padre por defecto es: { value }</p>
            <p>Valor actualizado es: { counter }</p>

            <button className="button" onClick={ Incrementar }>
                +1
            </button>
            <button className="button" onClick={ Decrementar }>
                -1
            </button>
            <button className="button" onClick={ Reset }>
                Reset default
            </button>
        </>
    );
}

CounterApp.propType = {
    value: PropTypes.number.isRequired
}