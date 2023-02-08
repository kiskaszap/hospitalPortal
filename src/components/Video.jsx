import React from 'react';
import YouTube from 'react-youtube';
import { useParams } from 'react-router-dom';
import dataDepartment from '../data/dataDepartments';
import { useState } from 'react';


const Video = () => {
 const [video,setVideo]=useState('')
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 0,
    },
  };
  const {name}= useParams()
  console.log(name)
  
 for(let i=0;i<dataDepartment.length;i++){
  if(name===dataDepartment[i].name){
   return <YouTube videoId={dataDepartment[i].youtube_url} opts={opts} />
  }
 }
  // return (
    
  // );
};

export default Video;
