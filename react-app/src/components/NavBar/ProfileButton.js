import React, { useState, useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";
import LogoutButton from "../auth/LogoutButton";
import './NavBar.css'
import { logout } from "../../store/session";
import { useDispatch } from "react-redux";



const ProfileButton = ({user}) => {

    const [showMenu, setShowMenu] = useState(false)
    const dispatch = useDispatch()
    const history = useHistory()
    

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

    const onLogout = async (e) => {
      await dispatch(logout());
      history.push("/");
    };

    return (
        <div>
            <div onClick={e => toggleMenu(e)} className="profile-button">
                {/* <img className='profile-image' src="https://blog.playo.co/wp-content/uploads/2017/04/feather-shuttlecock.jpg" alt=""/> */}
                <img className='profile-image' src={user.profilePicture} alt=''/>
            </div>
            {showMenu && (
                <div className="drop-down">
                    <NavLink className='navlink' to={`/users/${user.id}`} exact={true}>
                        <div className="dropdown-info">
                            <span><i className="fa-regular fa-user logo"></i></span>
                            Your Videos
                        </div>
                    </NavLink>
                    <NavLink className='navlink' to='/upload-video' exact={true}>
                        <div className="dropdown-info">
                            <span><i className="fa-solid fa-square-plus logo"></i></span>
                            Upload Video
                        </div>
                    </NavLink>
                        <div onClick={onLogout} className="dropdown-info">
                            <span><i className="fa-solid fa-arrow-right-from-bracket logo"></i></span>
                            <LogoutButton />
                        </div>
                </div>
            )}
        </div>
    )
}

export default ProfileButton