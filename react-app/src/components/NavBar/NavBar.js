
import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import UploadVideo from '../Video/CreateVideo/UploadVideo';
import ProfileButton from './ProfileButton';
// import 'videoplayback.mp4'
import './NavBar.css'
import { useSelector } from 'react-redux';
import badminton_icon from '../../assets/favicon_io/favicon-32x32.png'

const NavBar = ({setLeftBar}) => {
  
  const user = useSelector(state => state.session.user)
  // console.log(user)

  let session;
  if(!user){
    session = (
      <div className='login-signup'>
        <div className='login-signup-link login'>
          <NavLink className='navlink' to='/login' exact={true}>Log In</NavLink>
        </div>
        <div className='login-signup-link signup'>
          <NavLink className='navlink' to='/sign-up' exact={true}>Sign Up</NavLink>
        </div>
      </div>
    )
  } else {
    session = (
      <div className='nav-right'>
        <NavLink className="navlink" to="/upload-video" exact={true}>
          <div className="create-vid-link">
            <span>
              <i className="fa-solid fa-square-plus logo"></i>
            </span>
            Upload Video
          </div>
        </NavLink>
        <div>
          <ProfileButton user={user} />
        </div>
      </div>
    );
  }


  return (
    <>
      <nav className='whole-nav'>
          <div className='home-button'>
            <div className='burger'>
              <i onClick={() => setLeftBar(curr => !curr)} className="fa-solid fa-bars burger-icon"></i>
            </div>
            <NavLink className='navlink' to='/' exact={true} activeClassName='active'>
              <div className='home-button-div'>
                <span className='favicon-home'>
                  <img src={badminton_icon} alt=''/>
                </span>
                DropShotz
              </div>
            </NavLink>
          </div>
          {session}

          {/* <div>
            search bar
          </div> */}
          {/* <div>
            <NavLink to='/login' exact={true} activeClassName='active'>
              Login
            </NavLink>
          </div>
          <div>
            <NavLink to='/sign-up' exact={true} activeClassName='active'>
              Sign Up
            </NavLink>
          </div> */}
          {/* <div>
            <NavLink to='/users' exact={true} activeClassName='active'>
              Users
            </NavLink>
          </div> */}
          {/* <div>
            <LogoutButton />
          </div>
          <div>
            <NavLink to='/upload-video' exact={true}>Upload Video</NavLink> */}
            {/* <UploadVideo /> */}
          {/* </div> */}
      </nav>
      <div className='navbar-spacer'></div>
    </>
  );
}

export default NavBar;
