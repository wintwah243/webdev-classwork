import React, { useState } from "react";

export default function EditProfile() {
  const [profile, setProfile] = useState({}); //empty object

  //event handler to handle input fields
  const handleChange = ({ target }) => {
    //name is the attribute of input tag and value is the user input
    const {name, value} = target;
    setProfile((prevProfile) => ({ //wrap () before {} because we return object directly
      ...prevProfile,
      [name]: value   //add new object
    }))
  };

  //event handler to handle user submit
  const handleSubmit = (event) => {
    event.preventDefault(); //page reload
    //convert profile object into formatted string
    alert(JSON.stringify(profile, '', 2)); //2 is used for indent using 2 spaces
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={profile.firstName || ''}
        name="firstName"
        type="text"
        placeholder="First Name"
        onChange={handleChange}
      />
      <input
        value={profile.lastName || ''}
        type="text"
        name="lastName"
        placeholder="Last Name"
        onChange={handleChange}
      />
      <input
        value={profile.bday || ''}
        type="date"
        name="bday"
        onChange={handleChange}
      />
      <input
        value={profile.password || ''}
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
    
  );
}
