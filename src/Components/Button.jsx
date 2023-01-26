import PropTypes from 'prop-types'

const handleChange = (e) => {console.log(e.target.value + "....")}

export const Button = ({name, text=''}) => {
    return (
    <>
    <button onClick={
        () => {console.log('Hola')}}>
            {name}{text}
    </button>
    <input type="text" onChange={handleChange} /> 
    </>
    )

}

Button.propTypes = {
    name: PropTypes.string
}