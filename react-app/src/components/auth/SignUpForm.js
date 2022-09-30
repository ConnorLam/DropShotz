import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect, NavLink } from 'react-router-dom';
import { signUp } from '../../store/session';
import './SignUpForm.css'

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [profilePicture, setProfilePicture] = useState('')
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const [isSubmitted, setIsSubmitted] = useState(false)
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const validationErrors = [];

    if (password !== repeatPassword)
      validationErrors.push("Passwords are not the same");
    // console.log(profilePicture && !/.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(profilePicture.split("?")[0]) && profilePicture.length !== 0)

    if (!/.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(profilePicture.split("?")[0]) && profilePicture.length !== 0) {
      validationErrors.push("Please submit a valid preview image");
    }

    setErrors(validationErrors);
  }, [password, repeatPassword, profilePicture, username, email]);

  const onSignUp = async (e) => {
    e.preventDefault();

    setIsSubmitted(true);

    // if (profilePicture.length === 0) {
    //   setProfilePicture(
    //     "https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"
    //   );
    // }

    if (errors.length > 0) return;


    if (password === repeatPassword) {
      const data = await dispatch(
        signUp(firstName, lastName, profilePicture, username, email, password)
      );
      if (data) {
        setErrors(data);
      }
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  const updateFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const updateLastName = (e) => {
    setLastName(e.target.value);
  };

  const updateProfilePicture = (e) => {
    setProfilePicture(e.target.value);
  };

  // const noProfilePicture = (e) => {
  //   setProfilePicture('https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg')
  // }

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <div id='full-signup-page'>
      <div id='sign-up-header'>
        <h3>Sign Up for DropShotz</h3>
      </div>
      <form onSubmit={onSignUp}>
        <div>
          {isSubmitted && errors.map((error, ind) => (
            <div className='errors' key={ind}><li>{error}</li></div>
          ))}
        </div>
        <div className='firstName-lastName'>
          <div id='first-last-input'>
            {/* <label>First Name</label> */}
            <input
              required
              placeholder="First Name"
              type="text"
              name="first name"
              onChange={updateFirstName}
              value={firstName}
            ></input>
          </div>
          <div id='first-last-input'>
            {/* <label>Last Name</label> */}
            <input
              required
              placeholder="Last Name"
              type="text"
              name="username"
              onChange={updateLastName}
              value={lastName}
            ></input>
          </div>
        </div>
        <div>
          {/* <label>User Name</label> */}
          <input
            placeholder='Username'
            type="text"
            name="username"
            onChange={updateUsername}
            value={username}
          ></input>
        </div>
        <div>
          {/* <label>Email</label> */}
          <input
            placeholder='Email'
            type="email"
            name="email"
            onChange={updateEmail}
            value={email}
          ></input>
        </div>
        <div>
          {/* <label>Password</label> */}
          <input
            placeholder='Password'
            type="password"
            name="password"
            onChange={updatePassword}
            value={password}
          ></input>
        </div>
        <div>
          {/* <label>Repeat Password</label> */}
          <input
            placeholder='Repeat Password'
            type="password"
            name="repeat_password"
            onChange={updateRepeatPassword}
            value={repeatPassword}
            required={true}
          ></input>
        </div>
        <div>
          {/* <label>Profile Picture</label> */}
          <input
            placeholder="Profile Picture (optional)"
            type="text"
            name="profile picture"
            onChange={updateProfilePicture}
            value={profilePicture}
          ></input>
        </div>
        <div className='sign-up-submit'>
          <button type="submit">Sign Up</button>
        </div>
        <div className='have-an-account'>
          <div>
            <span className="have-an-account-words">Already on DropShotz?</span>
            <NavLink className="have-an-account-link" to={"/login"}>
              Log In
            </NavLink>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
