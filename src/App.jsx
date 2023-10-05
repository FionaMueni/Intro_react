import React, { useState } from 'react';
import { notifications } from '@mantine/notifications';

const App = () => {
  const [Username,SetUsername]= useState()
  const [Password,SetPassword]= useState()
  function submit (event) {
    event.preventDefault()
    // notifications.show({
    //   title: 'Default notification',
    //   message: 'Hey there, your code is awesome! 🤥',
    // })
    console.log(Username,Password)
  }
  return (
    <div>
      <a href="About">About</a>
      <a href="contact">Contact</a>
      <form onSubmit={submit}>
        <input type="Username" placeholder='enter your username'onChange={(event)=>SetUsername(event.target.value)}/>
        <input type="Password" placeholder='enter your password' onChange= {(event)=>SetPassword(event.target.value)}/>
        <button type="submit">Submit</button>
      </form>
      <button onClick={()=>notifications.show({
      title: 'Default notification',
      message: 'Hey there, your code is awesome! 🤥',
    })}>Display notification</button>
    </div>
  );
}

export default App;
