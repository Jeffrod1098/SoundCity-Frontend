import { FaTshirt, FaShoppingCart, FaHeadphonesAlt, FaUser } from 'react-icons/fa'
import React from 'react'
import { Link } from 'react-router-dom'


const Nav = () => {
    return (
        <div>
            <div>
                <nav className='navbar is-danger is-fixed-top'>
                    <div className='navbar-brand'>
                        <Link to='/' className='navbar-item'>
                            <FaHeadphonesAlt />
                            SOUND CITY
                        </Link>

                        {/* <div className="navbar-item"> */}
                        {/* <Link to='/postT'> */}
                        {/* POST A T */}
                        {/* </Link> */}
                        {/* </div> */}



                    </div>
                    <div id='navbarBasicExample' className='navbar-menu'>
                        <div className="navbar-end">
                            <div className="navbar-item">
                                <div className="buttons">
                                    <Link to='/login'>
                                        <div className="button is-light">
                                            <div className='icon is-small'>
                                                <FaUser />
                                            </div>
                                            <strong>Login</strong>
                                        </div>
                                    </Link>
                                    <div>
                                    </div>

                                    <div className='button is-light'>
                                        <div className='icon is-small'>
                                            <FaShoppingCart />
                                        </div>
                                        <strong>Cart</strong>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Nav