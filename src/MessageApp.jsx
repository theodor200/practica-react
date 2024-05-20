import PropTypes from 'prop-types'

export const MessageApp = ( { titulo, remitente, mensaje }) => {
    return(
        <>
            <h5>Titulo: { titulo }</h5>
            <h5>Remitente: { remitente }</h5>
            <p className="parrafo">Mensaje: { mensaje }</p>
            
        </>
    )
}

MessageApp.propTypes = {
    titulo: PropTypes.string.isRequired,
    remitente:  PropTypes.string.isRequired,
    mensaje:  PropTypes.string.isRequired,
}

/*
MessageApp.defaultProps = {
    titulo: "Titulo por defecto",
    remitente: "Remitente por defecto",
    mensaje: "Mensaje por defecto"
}*/