import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import  { BrowserRouter, Routes ,Route } from 'react-router-dom';
import Home from './Screens/Home';
import Signup from './Screens/Signup';
import Login from './Screens/Login';
import Profile from './Screens/Profile';
import CreatePost from './Screens/CreatePost';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
       <Routes>
         <Route exact path = "/" element = {<Home /> }> </Route>
         <Route exact path = "/signup"  element = {<Signup  />}> </Route>
         <Route exact path = "/login"     element = {<Login  />}> </Route>
         <Route exact path = "/profile" element = {<Profile />}> </Route>
         <Route exact path = "/createpost" element = {<CreatePost />}> </Route>
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
