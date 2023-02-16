import React from 'react'
import { Link } from 'react-router-dom';


const Signup = () => {
  return (
    <>
      <div className="mycard-signup" style = {{display:'flex',justifyContent:'center',paddingTop:'4%'}}>
         <div className="singup-card auth-card" style = {{width:'35%',padding:'3%'}}>
            <span style = {{fontSize:'23px'}}> Instagram  </span>
            <span> <input type = "text"  placeholder = 'name' /> </span>
            <span> <input type = "text"  placeholder = 'email' /> </span>
            <span> <input type = "text"  placeholder = 'password' /> </span>
            <span style = {{paddingBottom:'6%'}}>
            <button className='login-btn' style = {{padding:'2% 5%'}}> SIGNUP  </button>
            </span>
            <span>  <Link to = "/login"> Already have an account ?  </Link>
            </span>
         </div>
      </div>
    </>
  )
}

export default Signup