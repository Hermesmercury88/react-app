import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
function Account() {
    const { user} = useAuth()
    const [ account , setAccount] = useState([])
    return (
    <>
  
      <h1>Account</h1>
  
    </>
    );
  }
  
  export default Account;
  
  