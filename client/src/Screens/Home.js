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
          "Accept" : 'application/json',
          'Authorization' : `Bearer ${tokenhere}`
        }
      }

        axios.get('/allpost' , config)
        .then((res) => {  console.log('res is',res.data.posts);
         setdata(res)
        })
   },[])

  return (
       <div>
          <div className="outer-home-container" style = {{width:"100%",display:'grid',justifyContent:'center',padding:'1%'}}>

                {console.log('inside return issssss- ',data)}

                {/* <div className = "homepage-container" style = {{display:'grid',gridTemplateRows:'30px 280px 40px 50px 70px',backgroundColor:'wheat',width:'28%',margin:'2%'}}>
                    <div className = "homepage-post-container" >
                    
                        <div className="homepage-post-name" style = {{textAlign:'left'}}>
                          <span style = {{padding:'2%'}}>  ramesh  </span>
                        </div>

                        <div className="homepage-post-image">
                          <span> <img src = "/homepage-img.jpg"  alt = "homepage" style = {{width:'100%'}} />  </span>
                        </div>

                        <div className="homepage-post-like" style = {{textAlign:'left',padding:'2%'}}> 
                              <span> Like logo  </span>
                        </div>

                        <div className="homepage-post-title" style = {{textAlign:'left',padding:'1%'}}>
                              <span> This is amazing post  </span>
                        </div>

                        <div className="homepage-post-comment" style = {{padding:'1% 5%'}}>
                            <span>  
                              <input type = "text" placeholder = 'Add a Comment...'  />
                            </span>
                        </div>
                        
                    </div>
                </div> */}

            </div>
       </div>
  )
}

export default Home