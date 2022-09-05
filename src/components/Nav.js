import { FaTshirt, FaShoppingCart, FaHeadphonesAlt, FaUser } from 'react-icons/fa'
import React from 'react'
import { Link } from 'react-router-dom'


const Nav = () => {
    return (
            <div className='navPushDown'>
                <nav className='navbar is-danger is-fixed-top'>
                    <div className='navbar-brand'>
                        <Link to='/' className='navbar-item'>
                            <FaHeadphonesAlt />
                            SOUND CITY
                        </Link>


                    </div>
                    <div id='navbarBasicExample' className='navbar-menu'>
                        <div className="navbar-end">
                            <div className="navbar-item">
                                <div className="buttons">
                                        <div className="button is-light">
                                    <Link to='/login'>
                                            <div className='icon is-small'>

                                                <FaUser />

                                            </div>
                                            <strong>Login</strong>
                                    </Link>

                                        </div>

                                    <div>
                                    </div>

                                    <div className='button is-light'>
                                        <Link to='/cart/id?'>

                                        <div className='icon is-small'>
                                            <FaShoppingCart />
                                        </div>
                                        <strong>Cart</strong>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
    )
}

export default Nav