import React, { useState } from 'react';
import { BiEdit } from 'react-icons/bi';
import axios from 'axios';
//

const CardExampleCard = (name) => {
  const [details, setDetails] = useState({
    name: name.name.name,
    date: name.name.date,
    phone: name.name.phone,
    father: name.name.father,
    mother: name.name.mother,
    med: name.name.med,
    department:'xray',
    appointment:''
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;

    setDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
    
  };
  const editDetails = (e) => {
    e.preventDefault()
    axios
        .post("http://localhost:4000/card", {
          details,
        })
        .then(function (response) {
          console.log(response);
        });
    }
  
  
  return (
    <div className='cards'>
      <form action=''>
        <label htmlFor='name'>Name:</label> <br />
        <input
          id='name'
          name='name'
          type='text'
          value={details.name}
          onChange={changeHandler}
        />
        <br />
        <label htmlFor='date'>Date of birth:</label>
        <br />
        <input
          id='date'
          name='date'
          type='text'
          value={details.date}
          onChange={changeHandler}
        />
        <br />
        <label htmlFor='phone'>Phone:</label>
        <br />
        <input
          id='phone'
          type='text'
          name='phone'
          value={details.phone}
          onChange={changeHandler}
        />
        <br />
        <label htmlFor='father'>Father:</label>
        <br />
        <input
          id='father'
          type='text'
          name='father'
          value={details.father}
          onChange={changeHandler}
        />
        <br />
        <label htmlFor='mother'>Mother:</label>
        <br />
        <input
          id='mother'
          name='mother'
          type='text'
          value={details.mother}
          onChange={changeHandler}
        />
        <br />
        <label htmlFor='med'>Med history</label>
        <br />
        <input
          id='med'
          name='med'
          type='textbox'
          value={details.med}
          onChange={changeHandler}
        />
        <br />
        <label htmlFor='appointment'>Appointment</label> <br />
        <input
          type='datetime-local'
          name='appointment'
          id='appointment'
          onChange={changeHandler}
        /> <br />
        <label htmlFor="options">Departments</label><br />
        <select id='options' name='department' onChange={changeHandler}>
          <option value='x-ray'>X-ray</option>
          <option value='blood-taking'>Blood-taking</option>
          <option value='surgery'>Surgery</option>
          <option value='mri'>Mri</option>
          <option value='wards'>Wards</option>
        </select><br />
        <button onClick={editDetails}>Submit edited details</button>
      </form>
    </div>
  );
};

export default CardExampleCard;
