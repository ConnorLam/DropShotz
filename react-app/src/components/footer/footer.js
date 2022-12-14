import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

import './footer.css'


const Footer = ({leftBar, setLeftBar}) => {

    // const user = useSelector(state)

    // if(!leftBar){
    //     return (
    //         <div className='leftBar-false'>
    //             hi
    //         </div>
    //     )
    // }

    return leftBar && (
        <footer className='left-side'>
            <div className='left-side-content'>
                <div className='all-info'>
                    {/* <div className='site-content'>
                        <NavLink className='navlink' to={'/'}>
                            <div className='left-side-box'>
                                <i class="fa-solid fa-house icon"></i>
                                Home
                            </div>
                        </NavLink>
                    </div> */}
                    <div className='site-content'>
                        <NavLink className='navlink' to={'/about'}>
                            <div className='left-side-box'>
                                {/* <i className="fa-regular fa-user logo"></i> */}
                                <i class="fa-solid fa-hand icon"></i>
                            About DropShotz
                            </div>
                        </NavLink>
                        <a className='navlink' href='https://www.linkedin.com/in/connor-lam-a6545a23b/' target="_blank" rel="noreferrer noopener">
                            <div className='left-side-box'>
                                {/* <i className="fa-regular fa-user logo"></i> */}
                                <i className="fa-brands fa-linkedin icon"></i>
                            LinkedIn
                            </div>
                        </a>
                        <a className='navlink' href='https://github.com/ConnorLam' target="_blank" rel="noreferrer noopener">
                            <div className='left-side-box'>
                                {/* <i className="fa-regular fa-user logo"></i> */}
                                <i className="fa-brands fa-github icon"></i>
                            GitHub
                            </div>
                        </a>
                    </div>
                    <div className='site-content-2'>

                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer