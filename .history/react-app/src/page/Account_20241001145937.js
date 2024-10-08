import React, { useEffect, useState } from 'react';
import { useAuth } from '../AuthProvider';
function Account() {
    const { user} = useAuth()
    const [ account , setAccount] = useState([])
    const [showModal, setShowModal] = useState(false);
    const [editedName, setEditedName] = useState('');
    const [editedEmail, setEditedEmail] = useState('');
    const [editedPicture, setEditedPicture] = useState(null);
    return (
    <>
  
      <h1>Account</h1>
  
    </>
    );
  }
  
  export default Account;
  
  