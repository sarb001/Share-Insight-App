import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import  {  Routes ,Route } from 'react-router-dom';
import Home from './Screens/Home';
import Signup from './Screens/Signup';
import Login from './Screens/Login';
import Profile from './Screens/Profile';
import CreatePost from './Screens/CreatePost';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { Datastate } from './Context/DataProvider';
import UserProfile from './Screens/UserProfile';

function App() {

  const { user } = Datastate();
  console.log(' user App in ',user);

  return (
    <div className = "App">
      <ToastContainer  autoClose = {1000} />

      <Navbar />
        <Routes>
          <Route exact path = "/"     element = {<Home /> }>   </Route> 
          <Route path = "/signup"     element = {<Signup  />}> </Route>
          <Route path = "/login"      element = {<Login  />}>  </Route>

          <Route  exact  path = "/profile"         element = {user && <Profile />}> </Route>
          <Route  path = "/profile/:userid"        element = {<UserProfile  />}> </Route>
          <Route  path = "/createpost"             element = {user && <CreatePost />}> </Route>
        </Routes>
    </div>
  );
}

export default App;
