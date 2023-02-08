import React from 'react'
import dataDepartment from '../data/dataDepartments'
import Departments from '../components/Departments';

const Department = () => {
  const data =dataDepartment;
  
  return (
    <div className='departmentMain'>
      {data.map((item)=>{
        
        return <Departments  item={item} />
      })}
    </div>
  )
}

export default Department
