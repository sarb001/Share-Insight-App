import React from 'react'

const Profile = () => {
  return (
    <>
      <div className="post-outercontainer" style = {{Width:'60%',display:'grid',padding:'1% 15%'}}>   

         <div className = "profile-partition" style = {{display:'grid',gridTemplateColumns:'200px 1fr',paddingTop:'5%',borderBottom:'2px solid black'}}> 
              <div className = "profile-part" > 
               <span> <img src =  "/Profile-img.png" style = {{width:'70%'}} /> </span>
              </div>
              <div className="profile-name"> 
             <div> <h4> ramesh verma </h4>  </div>
             <div> 
               <span> 40 posts </span>
               <span> 40 followers </span>
               <span> 40 following </span>
            </div>
              </div>
         </div>   

          <div className="user-profile-images" style = {{paddingTop:'4%'}}>
             <span> <img src =  "/Profile-img.png" style = {{width:'25%'}} /> </span>
             <span> <img src =  "/Profile-img.png" style = {{width:'25%'}} /> </span>
             <span> <img src =  "/Profile-img.png" style = {{width:'25%'}} /> </span>
             <span> <img src =  "/Profile-img.png" style = {{width:'25%'}} /> </span>
             <span> <img src =  "/Profile-img.png" style = {{width:'25%'}} /> </span>
             <span> <img src =  "/Profile-img.png" style = {{width:'25%'}} /> </span>
          </div>
      </div>
    </>
  )
}

export default Profile