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

function App() {
  return (
    <div className="App">
      <ToastContainer  autoClose = {1000} />
      <Navbar />
       <Routes>
         <Route exact path = "/" element = {<Home /> }> </Route>
         <Route exact path = "/signup"  element = {<Signup  />}> </Route>
         <Route exact path = "/login"     element = {<Login  />}> </Route>
         <Route exact path = "/profile" element = {<Profile />}> </Route>
         <Route exact path = "/createpost" element = {<CreatePost />}> </Route>
       </Routes>
    </div>
  );
}

export default App;
