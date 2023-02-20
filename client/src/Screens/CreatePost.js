import axios from 'axios';
import React ,{ useState}  from 'react';
// import { useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';


const CreatePost = () => {

    // const [title,settitle] = useState("");
    // const [body,setbody] = useState("");

    const [image,setimage] = useState("");      // for getting Image 
    
    // const [url,seturl] = useState("");
    
    
    const [fileinputState,setfileinputState] = useState("");
    const [selectedFile,setselectedFile] = useState("");

    const [PreviewSource, setPreviewSource] = useState('');

    // const handleimagepost = () => {
    //     const data = new FormData()
    //     data.append("file",image)
    //     data.append("upload_preset","insta-clone")
    //     data.append("cloud_name","damnzg3hr")

    //     // fetch('https://api.cloudinary.com/v1_1/damnzg3hr/image/upload' ,{
    //     //     method : "post",
    //     //     body : data
    //     // }).then((res) => res.json())
    //     // .then((data) => {
    //     //      console.log(data);
    //     // })
    //     // .catch((err) => {
    //     //     console.log(err);
    //     // })

    //     const previewfile = (file) => {
    //         const reader = new FileReader();
    //         reader.readAsDataURL(file);
    //         reader.onloadend  = () => {
    //             setPreviewSource(reader.result);
    //         }
    // }

    //     axios.post('https://api.cloudinary.com/v1_1/damnzg3hr/image/upload' ,data)
    //     .then((res) => {
    //         console.log('res image is -',res.data);
    //     }).catch((err) => console.log('error is -',err));        
    // }

    const  handlefileinputChange = (e) => {

        const file = e.target.files[0];
        previewFile(file)
    }

    const previewFile = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setPreviewSource(reader.result);
        }
    }

  return (
    <div>
            <div className="createpost-outercontainer" style = {{display:'flex',justifyContent:"center"}}>
                    <div className = "createpost-container" style = {{width:'30%',padding:'3%',backgroundColor :'wheat'}}>
                        <input type = "text" placeholder = 'Enter Title...' />
                        <input type = "text" placeholder = 'Enter Body...' />
                  
                             <label htmlFor = "file-upload" id = "file-upload">
                             
                            </label>
                            <input  type = "file"  onChange = {handlefileinputChange} 
                             value = {fileinputState}  id = "file-upload" />
                             {PreviewSource && (
                                <img src = {PreviewSource}  alt = "chosen"  style = {{width:'100%'}} />   ) 
                             }
                            {/* <button onClick = {handleimagepost}> Submit Post  </button> */}
                           {/* URL here is -  {url}  */}
                    </div>
            </div>
    </div>
  )
}

export default CreatePost