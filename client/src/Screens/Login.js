import React from 'react'

const Login = () => {
  return (
    <div>
      <div className="mycard" style = {{  display:'flex',justifyContent:'center',paddingTop:'4%'}}>
         <div className="card auth-card" style = {{width:'35%',padding:'3%'}}>
            <span style = {{fontSize:'23px'}}> Instagram  </span>
            <span> <input type = "text"  placeholder = 'email' /> </span>
            <span> <input type = "text"  placeholder = 'password' /> </span>
            <span style = {{paddingBottom:'6%'}}>
            <button className='login-btn'> Login here   </button>
            </span>
         </div>
      </div>
    </div>
  )
}

export default Login