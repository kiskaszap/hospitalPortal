import React, {useState} from 'react'
import {MdUpload} from 'react-icons/md'


function FileUpload({ handleImageChange}) {
  

  
  return (
    <div className='file-input'>
     <label htmlFor="file">Upload Image {<MdUpload style={{fontSize:'1.5rem',marginLeft:'2rem'}}/>}</label>
      <input type="file" name='avatar' className='fileInput' id='file'  onChange={handleImageChange}/>
    </div>
  )
}

export default FileUpload
