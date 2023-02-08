import React from 'react'
import {Link} from 'react-router-dom'

const Departments = ({item}) => {
 console.log(item)
  return (
    <div className='departmentImages' key={item.id}>
      <img className='departmentImage' src={item.picture} alt={item.name}  />
      <button className='departmentName'><Link to={`${item.name}`}>{item.name}</Link></button>
    </div>
  )
}

export default Departments
