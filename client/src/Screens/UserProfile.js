import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Datastate } from '../Context/DataProvider';

const UserProfile = () => {

   const [userprofile,setuserprofile] = useState(null);

   const { user } = Datastate();
   console.log(' User is Existed  ',user);

    console.log(' UserProfile Component Starts  ')
    const { userid } = useParams();

   console.log('userrrrrr id is ',userid);

   const tokenhere = (localStorage.getItem('jwt'));
   console.log('token here in UserProfile ' , tokenhere);

    useEffect(() => {
        loadata();
    })

    const loadata = async() => {
      const config = {
          headers : {
              "Content-Type"  : "application/json",
              "Authorization" : `Bearer ${tokenhere}`
          }
        }

        const response = await axios.get(`/user/${userid}`,config)
        .then(res => {
          console.log(' axios inside is ',res.data)
          setuserprofile(res)
         })
        // console.log(' axios respponse is  ',response);
    }

  return (
    <>


          <h4>  Inside the User Profile   </h4>

            {
               userprofile ?  (
               <> 
                  <div>

                    {/* <h4> Name is -- {userprofile.user.name} </h4> */}
                  {/* <h1>  Inside  the User Profile   </h1>
                  <h4> Email  is -- {userprofile.user.email} </h4>
                  
                  <h4> Length  is -- {userprofile.posts.length}  posts </h4> */}

                    <h6> Show Photos here  </h6>
                {/* <div className = "gallery">

                  {
                      userprofile.posts.map(item => {
                        return (
                          <img  src = {item.photo} />
                        )
                      })
                  }
                </div> */}
                  </div>

               </>) : (<>
                  <h1>  Loading...... </h1>
               </>)
            }


          

{/* 
      <div className="post-outercontainer" style = {{Width:'60%',display:'grid',padding:'1% 15%'}}>   

         <div className = "profile-partition" style = {{display:'grid',gridTemplateColumns:'200px 1fr',paddingTop:'5%',borderBottom:'2px solid black'}}> 
              <div className = "profile-part" > 
               <span> <img src =  "/Profile-img.png"  alt = "profile-img" style = {{width:'70%'}} /> </span>
              </div>
              <div className="profile-name"> 
             <div> <h4> {user} </h4>  </div>
             <div> 
               <span> 40 posts </span>
               <span> 40 followers </span>
               <span> 40 following </span>
            </div>
              </div>
         </div>   

          <div className="user-profile-images" style = {{paddingTop:'4%'}}>
            {/* {mypics && mypics.map((item) => {
                 return (
                  <>
                   <span style  = {{display:'grid',gridTemplateColumns:'1fr',margin:'5%'}}> 
                    <img src =  {item.photo}  alt = "profile-img"  style = {{width:'30%'}} /> 
                  </span>
                  </>
                 )
            })} */}
          {/* </div> */}
      {/* </div> */}

 {/* */}

    </>
  )
}

export default UserProfile 