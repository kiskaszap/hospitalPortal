import React from 'react'
import loginPic from '../graphics/loginPic.svg'

const Login = () => {
  return (
    <div className='loginMain'>
      <form className='loginForm'>
       <input type="text" className='mainInput' placeholder='Username' />
       <br />
       <input type="text" className='mainInput' placeholder='Password'/>
       <br />
       
       <button type='submit' className='loginButton'>Login</button>
      </form>
      <img src={loginPic} alt="doctor" className='loginPic' />
    </div>
    
  )
}

export default Login
