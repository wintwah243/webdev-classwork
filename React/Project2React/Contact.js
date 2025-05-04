import React, { useState } from 'react';

function Contact() {
  const password = 'swordfish';
  //to check authorization
  const [authorized, setAuthorized] = useState(false);

//function to handle from submission
  function handleSubmit(e) {
    //this is from input tag of login
    const enteredPassword = e.target.querySelector(
      'input[type="password"]').value;
      //if entered passowrd and password are the same, auth is true
    const auth = enteredPassword == password;
    setAuthorized(auth)
  }

  const login = (
    <form action="#" onSubmit={handleSubmit}>
        <input type="password" placeholder="Password" />
         <input type="submit" />
    </form>
  );

  const contactInfo = (
      <ul>
          <li>
            client@example.com
          </li>
          <li>
            555.555.5555
          </li>
        </ul>
  );

  return (
      <div id="authorization">
        {/* check authorization */}
        <h1>{authorized? "Contact" : "Enter the Password"}</h1>
        { authorized ? contactInfo : login }
      </div>
  );
}

export default Contact;