import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

import './footer.css'


const Footer = () => {

    // const user = useSelector(state)

    return (
        <footer className='left-side'>
            <div className='left-side-content'>
                <NavLink className='navlink' to={'/'}>
                    <div className='left-side-box'>
                        <i class="fa-solid fa-house icon"></i>
                        Home
                    </div>
                </NavLink>
                <NavLink className='navlink' to={''}>
                    <div>
                        {/* <i className="fa-regular fa-user logo"></i> */}
                    </div>
                </NavLink>

            </div>
        </footer>
    )
}

export default Footer