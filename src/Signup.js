import React, { useState } from 'react'

function Signup() {
    const [formData,setFormData]=useState({
        username:'',
        password:''
});
const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div className='signcont'>
      <div className='part1'>
        <h1 className='logo'>CodeProsper</h1>
        <p>Join Our World To  Light Up Your Way And Future</p>
      </div>
    <div className='signin'>
      <input type='text'
        name='username'
        placeholder='Email Or Number'
        value={formData.username}
        onChange={handleChange}
        required></input>
      <input type='text' 
      name='Password'
       placeholder='Password'
       value={formData.password}
        onChange={handleChange}
        required></input>
      <button onClick="submit">Sign UP</button>
    </div>
    </div>
  )
}

export default Signup
