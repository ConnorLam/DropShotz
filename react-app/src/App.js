import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/Video/UserVideos/User';
import { authenticate } from './store/session';
import UploadVideo from './components/Video/CreateVideo/UploadVideo';
import AllVids from './components/Video/VideoList';
import VideoPage from './components/Video/VideoPage';
import Footer from './components/footer/footer';
import NotFound from './components/NotFound/NotFound';
// import UserVidsList from './components/Video/UserVideos/UserVidsList';
import './index.css'

function App() {
  const [loaded, setLoaded] = useState(false);
  const [leftBar, setLeftBar] = useState(false)
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar setLeftBar={setLeftBar}/>
      <div className='no-nav-bar'>
      <Footer leftBar={leftBar} setLeftBar={setLeftBar}/>
        <Switch>
          <ProtectedRoute path={'/upload-video'} exact={true}>
            <UploadVideo />
          </ProtectedRoute>
          {/* <Route path={'/videos'} exact={true}>
            <AllVids />
          </Route> */}
          <Route path={'/videos/:videoId'} exact={true}>
            <VideoPage />
          </Route>
          <Route path='/login' exact={true}>
            <LoginForm />
          </Route>
          <Route path='/sign-up' exact={true}>
            <SignUpForm />
          </Route>
          {/* <ProtectedRoute path='/users' exact={true} >
            <UsersList/>
          </ProtectedRoute> */}
          <Route path='/users/:userId' exact={true} >
            <User />
          </Route>
          <Route path='/' exact={true} >
            <AllVids />
          </Route>
          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
