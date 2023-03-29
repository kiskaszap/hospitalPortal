import React, { useState, useEffect } from 'react';
import axios from 'axios';
import avatar from '../graphics/avatar-icon-images-4.jpg'

import FileUpload from '../components/FileUpload';

const ProfilePic = ({ url, imgKey }) => {
  return (
    <div className='profilePic'>
      <img src={url ? url : avatar} key={imgKey} alt=""/>
    </div>
  );
}

const Profile = () => {
  
  const [profile, setProfile] = useState({});
  const [image,setImage]=useState(null)
  const [waitForImage,setWaitForImage]=useState(false)
  const [url,setUrl]=useState(false)
   const [imgKey, setImgKey] = useState(Date.now());
   const [ wait,setWait]=useState(false)
   
   const handleImageChange = (e) => {
    setImage({
      image: e.target.files[0],
    });
  };
   const submitPicture = (e) => {
  e.preventDefault();
  const formData = new FormData();
  formData.append("name", profile.name)
  formData.append("email",profile.email)
  formData.append("avatar", image.image);
  
    if (image.image&&profile.name&&profile.email) {
      axios
        .post("http://localhost:4000/picture", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then(function (response) {
          
          setImgKey(Date.now());
        });
    }
    else{
      console.log('Error');
    }
};
useEffect(() => {
  const data = async () => {
    const result = await axios.post(
      "http://localhost:4000/profile",
      { email: profile.email },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (result.data.imagePath!==null && result.data.name) {
      setUrl(`http://localhost:4000/${result.data.imagePath}/${result.data.name}`);
      
    }
  };
  data();
}, [profile.email,profile.name,url]);
      
useEffect(() => {
      const data = async () => {
        const result = await axios('http://localhost:4000/profile', { withCredentials: true
        } );
        
        setProfile(result.data);
      };
      data();
    }
, []);




  return (
    <div className='profileMain'>
      <div className='profileSubDiv'>
        <div className='div1'>
          <div className='profilePic'>
           
          <ProfilePic url={url} imgKey={imgKey} />
       
          </div>
          <div className='profileData'>
            <h1>Patient Profile</h1>
            <p>Name</p>
            <h2>{profile.name}</h2>
            <p>Date of birth</p>
            <h2>{profile.date}</h2>
          </div>
        </div>
      </div>
      <div>
        <div className='profileMedical'>
          <div className='div2'>
            <div>
              <p>Medical history</p>
              <h2>
                {profile.med}
              </h2>
            </div>
            <div className='profileDetails'>
              <div className='fatherDetails'>
                <p>Father`s name</p>
                <h2>{profile.father}</h2>
              </div>
              <div className='motherDetails'>
                <p>Mother`s name</p>
                <h2>{profile.mother}</h2>
              </div>
              <div className='phoneDetails'>
                <p>Phone Number</p>
                <h2>{profile.phone}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FileUpload handleImageChange={handleImageChange}placeholder='upload file' />
      <button onClick={submitPicture}>submit</button>
    </div>
  );
};

export default Profile;
