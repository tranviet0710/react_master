import PropTypes from 'prop-types'
import Button from './Button'
import { useLocation } from 'react-router-dom'
const Header = ({ title, addClick, changeAddBtn }) => {
    const
        location = useLocation()
    return (
        <header className='header'>
            {/* Styling in React */}
            {/* <h1 style={{ color: 'black', background: 'orange'}}>Task tracker</h1> */}
            {/* <h1 style={h1Style}>Task tracker</h1> */}

            <h1>{title}</h1>
            {/* <button className='btn'>Add</button> */}
            {location.pathname === '/' && <Button text={changeAddBtn ? 'Close' : 'Add'}
                color={changeAddBtn ? 'red' : 'green'}
                onClick={addClick} />}
        </header>
    )
}

// const h1Style = {
//     color: 'black', background: 'orange',
// }

Header.defaultProps = {
    title: 'Tran Viet',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}
export default Header