import React, {useState} from 'react'
import {MdUpload} from 'react-icons/md'


const FileUpload = () => {
 const [image,setImage]=useState(null)
 const changeHandler=(e)=>{
  const file = e.target.files[0];
    const previewURL = URL.createObjectURL(file);
    setImage(previewURL);
 }

  return (
    <div className='file-input'>
     <label for="file">Upload profile picture {<MdUpload style={{fontSize:'1.5rem',marginLeft:'2rem'}}/>}</label>
      <input type="file" className='fileInput' id='file'  onChange={changeHandler}/>
    </div>
  )
}

export default FileUpload
