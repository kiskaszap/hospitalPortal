import React, { useState, useEffect, useContext } from 'react';
import avatar from '../graphics/avatar-icon-images-4.jpg';
import axios from 'axios';
import { context } from '../components/Context';

const Profile = () => {
  const authentication = useContext(context);
  const [profile, setProfile] = useState({});

  useEffect(() => {
    if(authentication.data){

      const data = async () => {
        const result = await axios('http://localhost:4000/profile', { withCredentials: true });
        setProfile(result.data);
      };
      data();
    }
  }, [authentication.data]);

  
  
  
  

  return (
    <div className='profileMain'>
      <div className='profileSubDiv'>
        <div className='div1'>
          <div className='profilePic'>
            <img
              src={avatar}
              alt=''
            />
          </div>
          <div className='profileData'>
            <h1>Patient Profile</h1>
            <p>Name</p>
            <h2>{profile[0].name}</h2>
            <p>Date of birth</p>
            <h2>{profile[0].date}</h2>
          </div>
        </div>
      </div>
      <div>
        <div className='profileMedical'>
          <div className='div2'>
            <div>
              <p>Medical history</p>
              <h2>
                {profile[0].med}
              </h2>
            </div>
            <div className='profileDetails'>
              <div className='fatherDetails'>
                <p>Father`s name</p>
                <h2>{profile[0].father}</h2>
              </div>
              <div className='motherDetails'>
                <p>Mother`s name</p>
                <h2>{profile[0].mother}</h2>
              </div>
              <div className='phoneDetails'>
                <p>Phone Number</p>
                <h2>{profile[0].phone}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
