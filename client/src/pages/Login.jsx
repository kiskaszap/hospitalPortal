import React, { useState, useContext } from 'react';
import loginPic from '../graphics/loginPic.svg';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { context } from '../components/Context';

const Login = () => {
  const data = useContext(context);
  
  

  const navigate = useNavigate();
  const [login, setLogin] = useState({ email: '', password: '' });
  const handleChange = (e) => {
    e.preventDefault();
    setLogin((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };
  const submitHandler = async () => {
    const loginData = login;
    if (loginData.email && loginData.password) {
      axios
        .post(
          'http://localhost:4000/login',
          {
            loginData,
          },
          {
            withCredentials: true,
          }
        )
        .then(function (response) {
          if (response.data.isAuthenticated===true) {
            
            data.setData(response.data.isAuthenticated)
            data.setIsloggedIn(true);
            navigate('/profile');
          }
        });
    }
  };
  return (
    <div className='loginMain'>
      <form className='loginForm'>
        <input
          type='email'
          className='mainInput'
          placeholder='Email'
          onChange={handleChange}
          name='email'
        />
        <br />
        <input
          type='password'
          className='mainInput'
          placeholder='Password'
          onChange={handleChange}
          name='password'
        />
        <br />

        <button
          type='button'
          className='loginButton'
          onClick={submitHandler}
        >
          Login
        </button>
      </form>
      <img
        src={loginPic}
        alt='doctor'
        className='loginPic'
      />
    </div>
  );
};

export default Login;
