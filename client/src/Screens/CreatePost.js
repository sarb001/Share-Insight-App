import axios from 'axios';
import React ,{ useState}  from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


const CreatePost = () => {

    const [title,settitle] = useState("");
    const [body,setbody] = useState("");
    const [image,setimage] = useState("");      // for getting Image 
    const [url,seturl] = useState("");          // for Img URL 
    
    const navigate = useNavigate();

        // const handlepostsubmit = () => {

        // const data = new FormData()
        // data.append("file",image)
        // data.append('upload_preset',"insta-clone")
        // data.append('cloud_name',"damnzg3hr")
        // fetch('https://api.cloudinary.com/v1_1/damnzg3hr/image/upload' , {
        //     method : 'post',
        //     body : data
        // })
        // .then(res => res.json())
        // .then(data =>  {
        //     // console.log(data)
        //     seturl(data.url)
        // })
        // .catch(err =>  {console.log(err)})

        //  fetch('/createpost',{
        //     method : "post",
        //     headers : {
        //         "Content-Type" : 'application/json'
        //     },
        //     body : JSON.stringify({
        //       title,
        //       body,
        //       photo: url
        //     })
        //  }).then(res => res.json())
        //  .then(data => { console.log(data)})

        //  if(data.err){
        //         toast.error(' Error here in data ')
        //  }else{
        //     toast.success(' Create post Data Posted ')
        //  }
        // }

        const handlepostsubmit = () => {

        }


  return (
    <div>
                    
                                        <input type = "file" />       
                                        <button> here  </button> 


    </div>
  )
}

export default CreatePost