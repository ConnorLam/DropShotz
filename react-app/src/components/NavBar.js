
import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
// import 'videoplayback.mp4'

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to='/' exact={true} activeClassName='active'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/login' exact={true} activeClassName='active'>
            Login
          </NavLink>
        </li>
        <li>
          <NavLink to='/sign-up' exact={true} activeClassName='active'>
            Sign Up
          </NavLink>
        </li>
        <li>
          <NavLink to='/users' exact={true} activeClassName='active'>
            Users
          </NavLink>
        </li>
        <li>
          <LogoutButton />
        </li>
        {/* <video src='https://connorlam-dropshotz-bucket.s3.us-west-1.amazonaws.com/1843f0df86e043ca9607094171962336.mp4' controls type='video/mp4' /> */}

          {/* <source src='./videoplayback.mp4' type='video/mp4'></source>

        </video> */}
      </ul>
    </nav>
  );
}

export default NavBar;
