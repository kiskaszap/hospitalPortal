import React, {useState} from 'react'
 

const Inputs = ({type,className,id,placeholder}) => {
 const [value,setValue]=useState(placeholder)
 const clickHandler =(e)=>{
  e.preventDefault()
  setValue(e.target.value)
  console.log(value)
  
 }
  return (
    <div>
      <input type={type} className={className} id={id} placeholder={placeholder}  onChange={clickHandler} />
    </div>
  )
}

export default Inputs
