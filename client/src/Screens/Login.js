import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {

  const [password,setpassword] = useState("");
  const [email,setemail] = useState("");
  const navigate = useNavigate();

  const handlelogin = async(e) => {
      e.preventDefault();

      if(!email || !password){
        toast.warn(' Please Fill all the Fields ')
      }

    try{

      const config = {
        headers : { 'Content-type' : 'application/json' },
     }

     const {data} =await axios.post('/login' , {
       email,password}, config);
       toast.success(' Successfully Logged In ')

      navigate('/');

    }catch(error)
    {
      toast.error(' Wrong Credentials ')
    }
  }

  
  return (
    <div>
      <div className="mycard" style = {{display:'flex',justifyContent:'center',paddingTop:'4%'}}>
         <div className="card auth-card" style = {{width:'35%',padding:'3%'}}>
            <span style = {{fontSize:'23px'}}> Instagram  </span>

      <form onSubmit = {handlelogin}>
            <span> <input type = "email"  placeholder = 'email'  
            value = {email}    onChange = {(e) => setemail(e.target.value)}  required/> </span>
            <span> <input type = "password"  placeholder = 'password'  
            value = {password}  onChange = {(e) => setpassword(e.target.value)} required /> </span>
            <span style = {{paddingBottom:'6%'}}>
            <button className='login-btn' style = {{padding:'2% 5%'}}> Login here   </button>
            </span>
      </form>
         </div>
      </div>
    </div>
  )
}

export default Login