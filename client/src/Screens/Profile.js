import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Datastate } from '../Context/DataProvider';

const Profile = () => {

   const [mypics,setpics] = useState([]);
   const { user } = Datastate();
   console.log(' user is here ',user);

   const tokenhere = user && (localStorage.getItem('jwt'));
   console.log('token here' , tokenhere);

    useEffect(() => {
      const config = {
        headers : {
          "Content-Type"  : "application/json",
          "Authorization" : `Bearer ${tokenhere}`
        }
      }

        axios.get('/mypost' , config)
        .then((result) => {  console.log(' myposts are  ',result);
         setpics(result.data.mypost)
        })
   },[])


  return (
    <>
      <div className="post-outercontainer" style = {{Width:'60%',display:'grid',padding:'1% 15%'}}>   

         <div className = "profile-partition" style = {{display:'grid',gridTemplateColumns:'200px 1fr',paddingTop:'5%',borderBottom:'2px solid black'}}> 
              <div className = "profile-part" > 
               <span> <img src =  "/Profile-img.png"  alt = "profile-img" style = {{width:'70%'}} /> </span>
              </div>
              <div className="profile-name"> 
             <div> <h4> {user} </h4>  </div>
             <div> 
               <span> {mypics.length} posts </span>
               <span> 40 followers </span>
               <span> 40 following </span>
            </div>
              </div>
         </div>   

          <div className="user-profile-images" style = {{paddingTop:'4%'}}>
            {mypics && mypics.map((item) => {
                 return (
                  <>
                   <span style  = {{display:'grid',gridTemplateColumns:'1fr',margin:'5%'}}> 
                    <img src =  {item.photo}  alt = "profile-img"  style = {{width:'30%'}} /> 
                  </span>
                  </>
                 )
            })}
          </div>
      </div>
    </>
  )
}

export default Profile