import PropTypes from 'prop-types';
const Button = ({ color, text, onClick }) => {
    return (
        <button onClick={onClick} style={{ backgroundColor: color }} className='btn'>{text}</button>
    );
}
Button.defaultProps = {
    text: 'Button',
    color: 'blue',
    onClick: () => { console.log('default func called.') },
}
Button.propTypes = {
    color: PropTypes.string,
    text: PropTypes.string,
    onClick: PropTypes.func,
}
export default Button;