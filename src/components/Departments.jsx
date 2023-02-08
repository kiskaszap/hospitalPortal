import React from 'react'

const Departments = ({item}) => {
 console.log(item)
  return (
    <div className='departmentImages' key={item.id}>
      <img className='departmentImage' src={item.picture} alt={item.name}  />
      <h2 className='departmentName'>{item.name}</h2>
    </div>
  )
}

export default Departments
