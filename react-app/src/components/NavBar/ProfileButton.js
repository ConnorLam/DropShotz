import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import LogoutButton from "../auth/LogoutButton";
import './NavBar.css'


const ProfileButton = ({user}) => {

    const [showMenu, setShowMenu] = useState(false)
    

    function toggleMenu(e){
        setShowMenu(current => !current) 
    }

    useEffect(() => {
      const closeMenu = () => {
        if (showMenu) {
          setShowMenu(false);
        }
      };

      document.addEventListener("click", closeMenu);
      return () => document.removeEventListener("click", closeMenu);
    }, [showMenu]);

    return (
        <div>
            <div onClick={e => toggleMenu(e)} className="profile-button">
                {/* <img className='profile-image' src="https://blog.playo.co/wp-content/uploads/2017/04/feather-shuttlecock.jpg" alt=""/> */}
                <img className='profile-image' src={user.profilePicture} alt=''/>
            </div>
            {showMenu && (
                <div className="drop-down">
                        <div className="dropdown-info">
                            <span><i className="fa-regular fa-user logo"></i></span>
                            <NavLink className='navlink' to={`/users/${user.id}`} exact={true}>Your Videos</NavLink>
                        </div>
                        <div className="dropdown-info">
                            <span><i className="fa-solid fa-square-plus logo"></i></span>
                            <NavLink className='navlink' to='/upload-video' exact={true}>Upload Video</NavLink>
                        </div>
                        <div className="dropdown-info">
                            <span><i className="fa-solid fa-arrow-right-from-bracket logo"></i></span>
                            <LogoutButton />
                        </div>
                </div>
            )}
        </div>
    )
}

export default ProfileButton