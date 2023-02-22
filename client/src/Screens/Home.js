import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';
import { Datastate } from '../Context/DataProvider';

const Home = () => {

      const { user } = Datastate();
      console.log('  user in home is ',user);
      
      const [data,setdata] = useState([]);
      const tokenhere = user && (localStorage.getItem('jwt'));
      console.log(' user jwt is  ',tokenhere);


   useEffect(() => {

      const config = {
        headers : {
          "Content-Type"  : "application/json",
        }
      }

        axios.get('/allpost' , config)
        .then((res) => {  console.log('response  iss home',res);
         setdata(res.data.posts)
        })
   },[])

   // like post 
   const likepost = (id) => {
    try{      
      const config = {
          headers : {
              "Content-Type"  : "application/json",
              'Authorization' : `Bearer ${tokenhere}`,
          }
      }
          axios.put('/like' ,{
          postId : id
        },config)
        .then(response => {  
          console.log(' like resp is  ' ,response)

          const newdata = data.map(item => {        // for updating state of numbers or  2 likes 3 likes
              if(item._id === response._id){
                return response
              }else{  
                return item
              }
          })
          setdata(newdata)
        })
        toast.success(' Liked It .... ')
      
    }catch(error)
      {
          console.log(' err  while creating post is -',error );
          toast.error(' Something Went Wrong')
      }
    }
   
    // dis like post 
   const unlikepost = (id) => {
    try{      
      const config = {
          headers : {
              "Content-Type"  : "application/json",
              'Authorization' : `Bearer ${tokenhere}`,
          }
      }

          axios.put('/unlike' ,{
          postId : id
        },config)
        .then(response => {  
          console.log(' Unlike resp is  ' ,response)
          
          const newdata = data.map(item => {        // for updating state of numbers or  2 likes 3 likes
            if(item._id === response._id){
              return response
            }else{  
              return item
            }
        })
        setdata(newdata)
      })
        toast.success(' UnLiked It .... ')
      
    }catch(error)
      {
          console.log(' err  while Unlike  post is -',error );
          toast.error(' Something Went Wrong')
      }
   }


  return (
       <div>
          <div className="outer-home-container" style = {{width:"100%",display:'grid',justifyContent:'center',padding:'1%',cursor:'pointer'}}>

                {console.log('inside return issssss- ',data)}
                  {data.map(item =>{

                     return(
                       <div className = "homepage-container" style = {{display:'grid',gridTemplateRows:'30px 280px 40px 50px 70px',backgroundColor:'wheat',width:'28%',margin:'2%'}}>
                               <div className = "homepage-post-container" >
                                        <div className="homepage-post-name" style = {{textAlign:'left'}}>
                                          {/* <span style = {{padding:'2%'}}>  {item.postedBy.name}  </span> */}
                                        </div>

                                        <div className="homepage-post-image">
                                          <span> <img src = {item.photo}  alt = "homepage" style = {{width:'100%'}} />  </span>
                                        </div>

                                        <div className="homepage-post-like" style = {{textAlign:'left',padding:'2%'}}> 
                                              <span>
                                              <i className='material-icons' style = {{color:'red'}}> favorite </i>
                                              <i className='material-icons'  onClick = {() => {likepost(item._id)}}   > thumb_up</i>
                                              <i className='material-icons'  onClick = {() => {unlikepost(item._id)}} >thumb_down</i>
                                               </span>
                                               <span> {item.likes.length} likes </span>
                                        </div>

                                        <div className="homepage-post-title" style = {{textAlign:'left',padding:'1%'}}>
                                              <span> {item.title} </span>
                                        </div>

                                        <div className="homepage-post-body" style = {{textAlign:'left',padding:'1%'}}>
                                              <span> {item.body} </span>
                                        </div>

                                        <div className="homepage-post-comment" style = {{padding:'1% 5%'}}>
                                            <span>  
                                              <input type = "text" placeholder = 'Add a Comment...'  />
                                            </span>
                                        </div>
                                  
                              </div>
                      </div> 
                     )
                  })}


              
            </div>
       </div>
  )
}

export default Home