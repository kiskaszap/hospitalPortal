import React from 'react';
import loginPic from '../graphics/loginPic.svg';
import FileUpload from '../components/FileUpload';
import Inputs from '../components/Inputs';

const Register = () => {
  return (
    <div>
      <div className='registerMain'>
        <form className='registerForm'>
          <div className='formPart1'>
            <label
              className='regLabel'
              htmlFor='fullNameReg'
            >
              Full Name
            </label>
            <br />
            <input
              type='text'
              className='loginInput'
              id='fullNameReg'
              placeholder='John Smith'
            />
            <br />
            <label
              className='regLabel'
              htmlFor='dateOfBirthReg'
            >
              Date of birth
            </label>
            <br />
            <input
              type='date'
              className='loginInput'
              id='dateOfBirthReg'
            />
            <br />
            <label
              className='regLabel'
              htmlFor='userNameReg'
            >
              E-mail address
            </label>
            <br />
            <input
              type='text'
              className='loginInput'
              id='userNameReg'
              placeholder='john.smith@gmail.com'
            />
            <br />
            <label
              className='regLabel'
              htmlFor='passwordReg'
            >
              Password
            </label>
            <br />
            <input
              type='password'
              className='loginInput'
              id='passwordReg'
              placeholder='**********'
            />
            <br />
            <label
              className='regLabel'
              htmlFor='repPasswordReg'
            >
              Repeat Password
            </label>
            <br />
            <input
              type='password'
              className='loginInput'
              id='repPasswordReg'
              placeholder='**********'
            />
            <br />
          </div>
          <div className='formPart2'>
            <label
              className='regLabel'
              htmlFor='phoneReg'
            >
              Phone number
            </label>
            <br />
            <input
              type='number'
              className='loginInput'
              id='phoneReg'
              placeholder='07557345254'
            />
            <br />
            <label
              className='regLabel'
              htmlFor='parentReg'
            >
              Mother`s`
            </label>
            <br />
            <input
              type='text'
              className='loginInput'
              id='parentReg'
              placeholder='Rachel Smith'
            />
            <br />
            <label
              className='regLabel'
              htmlFor='parentReg'
            >
              Father`s name
            </label>
            <br />
            <input
              type='text'
              className='loginInput'
              id='parentReg'
              placeholder='Josh Smith'
            />
            <br />
            <label
              className='regLabel'
              htmlFor='textBoxReg'
            >
              Medical history
            </label>
            <br />
            <input
              type='text'
              className='loginInput'
              id='textBoxReg'
              placeholder='e.g broken leg, etc...'
            />
            <br />
            <br />
            <Inputs
              type={'text'}
              className={'loginInput'}
              placeholder={'seggarc'}
            />
            <FileUpload />
            <button
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
