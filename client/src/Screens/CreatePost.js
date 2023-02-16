import React from 'react';

const CreatePost = () => {
  return (
    <div>
                    <div className = "createpost-container" style = {{display:'flex',justifyContent:'center'}}>
                        <div className = "createpost-container" style = {{width:'35%',padding:'3%',backgroundColor:'wheat',color:'black'}}>
                          
                                <div className="card-input">
                                    <span>  <input type = "text"  placeholder='Enter Title...'/> </span>
                                    <span>  <input type = "text"  placeholder='Enter Body...'/> </span>
                                </div>
                                <button className = "file-field" style = {{padding:'2%'}}>
                                    <span>  Upload Image  </span>
                                    <span> <input type = "file" /> </span>
                                </button>
                                <div className="file-path-wrapper">
                                    <input type = "text"  />
                                </div>
                                <div className="submit-post">
                                    <button style = {{padding:'2%'}}> Submit Post  </button>
                                </div>
                        </div>
                 </div>
    </div>
  )
}

export default CreatePost