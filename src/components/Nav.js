import { FaTshirt, FaShoppingCart, FaHeadphonesAlt, FaUser } from 'react-icons/fa'
import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'


const Nav = () => {

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin
    const logoutHandler = () => {
        console.log('logout')
    }

    return (
        <div className='navPushDown'>
            <nav className='navbar is-danger is-fixed-top'>
                <div className='navbar-brand'>
                    <Link to='/' className='navbar-item'>
                        <FaHeadphonesAlt />
                        SOUND CITY
                    </Link>

                    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>
                <div id='navbarBasicExample' className='navbar-menu'>
                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons">
        

                                    {userInfo ? (
                                        <div class="dropdown is-hoverable">
                                            <div class="dropdown-trigger">
                                                <button class="button" aria-haspopup="true" aria-controls="dropdown-menu4">
                                                    <span>{userInfo.name}</span>
                                                    <span class="icon is-small">
                                                        <i class="fas fa-angle-down" aria-hidden="true"></i>
                                                    </span>
                                                </button>
                                            </div>
                                            <div class="dropdown-menu" id="dropdown-menu4" role="menu">
                                                <div class="dropdown-content">
                                                    <div class="dropdown-item">
                                                        <Link to='/profile'>
                                                            <strong>Profile</strong>
                                                        </Link>
                                                    </div>
                                                    <div onClick={logoutHandler} class="dropdown-item">
                                                        <strong>Logout</strong>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="button is-light">
                                            <Link to='/login'>
                                        <div className='icon is-small'>

                                            <FaUser />

                                        </div>
                                        <strong>Login</strong>
                                    </Link>
                                    </div>
                                    )}
                                    {/* <Link to='/login'>
                                        <div className='icon is-small'>

                                            <FaUser />

                                        </div>
                                        <strong>Login</strong>
                                    </Link> */}



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