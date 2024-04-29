import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Navbar = ({title='Contact Management', icon='fas fa-id-card-alt'}) => {
  return (
    <div className='navbar bg-primary'>
        <h1>
            <i className={icon} /> {title}
        </h1>
        <ul>
            <li>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/register'>Register</Link>
                <Link to='/login'>Login</Link>
            </li>
        </ul>
        
    </div>
  )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string
}


export default Navbar