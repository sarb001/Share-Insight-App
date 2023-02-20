import axios from 'axios';
import React ,{ useState}  from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Datastate } from '../Context/DataProvider';


const CreatePost = () => {

    const [title,settitle] = useState("");
    const [body,setbody] =   useState("");
    const [photo,setphoto] = useState("");

    const [image,setimage] = useState("");      // for getting Image 
    
    const [url,seturl] = useState("");
    const navigate = useNavigate();  
    const { user  , jwt } = Datastate();

    const tokenhere = user && (localStorage.getItem('jwt'));
    console.log('token here' , tokenhere);

    // console.log(' user is - ',user);
    // console.log(' jwt data - ',jwt);

    const handleimagepost = async() => {

        const data = new FormData()
        data.append("file",image)
        data.append("upload_preset","insta-clone")
        data.append("cloud_name","damnzg3hr")

        axios.post('https://api.cloudinary.com/v1_1/damnzg3hr/image/upload' ,data)
        .then((res) => {
            console.log('IIIIImage is -',res.data.url);
            seturl(res.data.url)
        }).catch((err) => console.log(' Image handle post error is  -',err));      
        
          // upload title and body to db 
          
          try{
           
            const config = {
                headers : {
                     "Content-Type"  : "application/json",
                     'Authorization' : `Bearer ${tokenhere}`,
                }
            }
            console.log('in between here--');

            const { data } = await axios.post('/createpost' , {
                    title,
                    body,
                    photo : url
            },config)

            console.log('data after selected' , data);
               toast.success(' Post is Created Successfully ')
               navigate('/');
      
           }catch(error)
            {
                 console.log(' err  while creating post is -',error );
                 toast.error(' Something Went Wrong')
            }
    }

  return (
    <div>
            <div className="createpost-outercontainer" style = {{display:'flex',justifyContent:"center"}}>
                    <div className = "createpost-container" style = {{width:'30%',padding:'3%',backgroundColor :'wheat'}}>
                        <input type = "text" placeholder = 'Enter Title...'   value = {title}  onChange = {(e) =>  settitle(e.target.value)} />
                        <input type = "text" placeholder = 'Enter Body...'    value = {body}   onChange = {(e) =>  setbody(e.target.value)} />
                  
                             <label htmlFor = "file-upload" id = "file-upload">
                             
                            </label>
                            <input  type = "file"   onChange = {(e) => setimage(e.target.files[0])}
                             id = "file-upload" />
                                
                            <button   onClick = {handleimagepost}> Submit Post  </button>   
                    </div>
            </div>
    </div>
  )
}

export default CreatePost