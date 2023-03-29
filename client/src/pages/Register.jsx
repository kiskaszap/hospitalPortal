import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


import loginPic from '../graphics/loginPic.svg';



const Register = () => {
  const navigate = useNavigate();
  const [person, setPerson] = useState({
    name: '',
    date: '',
    email: '',
    password: '',
    rePassword: '',
    phone: '',
    mother: '',
    father: '',
    med: '',
    image: '',
  });
  const [placeholder, setPlaceholder] = useState({
    name: 'Full name',
    date: 'Date of birth',
    email: 'Email',
    password: 'Password',
    rePassword: 'Re-enter password',
    phone: 'Phone',
    mother: "Mother's name",
    father: "Father's name",
    med: 'Medical History',
  });

 

  const handleChange = (e) => {
    setPerson((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = async (e) => {
    
    e.preventDefault();

    const personKeys = Object.keys(person);
    const missingValues = personKeys.filter((key) => !person[key]);

    const missingValuesObject = Object.assign(
      {},
      ...missingValues.map((k) => ({ [k]: 'Please fill this out' }))
    );

    setPlaceholder((prev) => {
      return {
        ...prev,
        ...missingValuesObject,
      };
    });

    if (person.password !== person.rePassword) {
      const dontMatch = 'Passwords have to match';
      setPerson((prev) => {
        return {
          ...prev,
          password: '',
          rePassword: '',
        };
      });
      setPlaceholder((prev) => {
        return {
          ...prev,
          password: dontMatch,
          rePassword: dontMatch,
        };
      });
    }

    if (
      person.name &&
      person.date &&
      person.email &&
      person.password === person.rePassword &&
      person.phone &&
      person.mother &&
      person.father &&
       person.med  
      
    ) {
      const registeredUser = {
        name: person.name,
        date: person.date,
        email: person.email,
        password: person.password,
        phone: person.phone,
        mother: person.mother,
        father: person.father,
        med: person.med,
        
      };
      
     

      axios
        .post('http://localhost:4000/registration', registeredUser, {
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .then(function (response) {
          console.log(response);
          
          navigate('/login');
        });
    }
  };

  return (
    <div>
      <div className='registerMain '>
        <form className='registerForm'>
          <div className='formPart1'>
            <br />
            <input
              type='text'
              className='loginInput'
              placeholder={placeholder.name}
              name='name'
              value={person.name}
              onChange={handleChange}
            />
            <br />

            <br />
            <input
              type='date'
              className='loginInput'
              placeholder={placeholder.date}
              name='date'
              value={person.date}
              onChange={handleChange}
            />
            <br />

            <br />
            <input
              type='text'
              className='loginInput'
              placeholder={placeholder.email}
              name='email'
              value={person.email}
              onChange={handleChange}
            />
            <br />

            <br />
            <input
              type='password'
              className='loginInput'
              placeholder={placeholder.password}
              name='password'
              value={person.password}
              onChange={handleChange}
            />
            <br />

            <br />
            <input
              type='password'
              className='loginInput'
              placeholder={placeholder.rePassword}
              name='rePassword'
              value={person.rePassword}
              onChange={handleChange}
            />
            <br />
          </div>
          <div className='formPart2'>
            <br />
            <input
              type='number'
              className='loginInput'
              placeholder={placeholder.phone}
              name='phone'
              value={person.phone}
              onChange={handleChange}
            />
            <br />

            <br />
            <input
              type='text'
              className='loginInput'
              placeholder={placeholder.mother}
              name='mother'
              value={person.mother}
              onChange={handleChange}
            />
            <br />

            <br />
            <input
              type='text'
              className='loginInput'
              placeholder={placeholder.father}
              name='father'
              value={person.father}
              onChange={handleChange}
            />
            <br />

            <br />
            <input
              type='text'
              className='loginInput'
              placeholder={placeholder.med}
              name='med'
              value={person.med}
              onChange={handleChange}
            />
            <br />
            <br />

            
            <button
              onClick={handleSubmit}
              type='button'
              id='regButton'
              className='loginButton'
            >
              Register
            </button>
          </div>
        </form>

        <img
          src={loginPic}
          alt='doctor'
          className='loginPic'
        />
      </div>
    </div>
  );
};

export default Register;
