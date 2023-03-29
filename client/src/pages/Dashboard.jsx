import React, {useEffect,useState} from 'react'
import axios from 'axios';
import CardExampleCard from '../components/ProfileCard';


const Dashboard = () => {
  const[allUser,setAllUser]=useState('')
  const [dataTrue,setDataTrue]=useState(false)
   useEffect(() => {
    

      const data = async () => {
        const result = await axios('http://localhost:4000/dashboard', { withCredentials: true });
        console.log(result);

        setAllUser(result)
        setDataTrue(true)

      };
      data();
    
  }, []);
  
  return (
    <div>
    {
    dataTrue?
    allUser.data.map((user)=>{
      return <CardExampleCard key={user.id} name={user} />
    }):null}
    </div> 
  )
}

export default Dashboard
