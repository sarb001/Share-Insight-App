import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Datastate } from '../Context/DataProvider';

const UserProfile = () => {

   const [userprofile,setuserprofile] = useState(null);   // For updating  followers 

   const [showfollower,setshowfollower] = useState(true);   // For Chainging Button Side 

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
          console.log(' ressssssss isss',res.data)
          setuserprofile(res)
         })
    }


    const followuser = async() => {

      const config = {
        headers : {
            "Content-Type"  : "application/json",
            "Authorization" : `Bearer ${tokenhere}`
        }
      }
        const res =  await axios.put('/follow', {
          followId : userid
        },config)
        .then(resdata => {
          console.log(' follow user is ',resdata);
          localStorage.setItem('user',JSON.stringify(resdata.data))
          setuserprofile((prevstate) => {
              return {
                 ...prevstate,
                 user : {
                  ...prevstate.user,
                  followers: [...prevstate.data.user.followers,resdata.data._id]
                 }
              }
          })
          setshowfollower(false)
        })
          // 
        toast.success(' User Has  Been Followed  ')
    }


     const unfollowuser = async() => {

      const config = {
        headers : {
            "Content-Type"  : "application/json",
            "Authorization" : `Bearer ${tokenhere}`
        }
      }

        const res =  await axios.put('/unfollow', {
          unfollowId : userid
        },config)
        .then(resdata => {
          console.log(' unfollow user is ',resdata);
          localStorage.setItem('user',JSON.stringify(resdata.data))
          setuserprofile((prevstate) => {
              return {
                 ...prevstate,
                 user : {
                  ...prevstate.user,
                  followers: [...prevstate.data.user.followers,resdata.data._id]
                 }
              }
          })
        })
          // 
        toast.success(' User Has  Been UnFollowed  ')
    }

     


  return (
    <>
          <h5>  Inside the New User Profile   </h5>
            {
               userprofile ?  (
               <> 
                  <div style  = {{display:'grid',gridTemplateColumns:'1fr 1fr'}}>
                    <div className="first-side"> 
                     <span style  = {{fontSize:'28px'}}> Username is -
                      {userprofile.data.user.name} </span>
                     <h6> Email - {userprofile.data.user.email} </h6>
                     <div className="follwers-section" style = {{display:'grid',gridTemplateColumns:'100px 190px 100px',margin:'4% 16%',fontSize:'18px'}}>
                       <span> {userprofile.data.posts.length}  posts </span>
                       <span> {userprofile.data.user.followers.length} followers </span>
                       <span> {userprofile.data.user.following} following  </span>
                     </div>

                  <div>
                    {
                      showfollower ? (
                      <>
                         <button onClick = {() => followuser()}>  Follow  </button>    
                      </>) : (
                      <>
                     <button onClick = {() => unfollowuser()}>  UnFollow  </button>
                      </>)
                    }
                  </div>
                    </div>
                   
                  <div className = "gallery">
                            {
                                userprofile.data.posts.map(item => {
                                  return (
                                    <>
                                      <div style = {{margin:'4% 5%'}}>
                                        <img  key = {item._id} src = {item.photo}  alt = {item.title} style = {{width:'50%'}} />
                                      </div>
                                    </>
                                  )
                                })
                            }
                    </div>

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