import React, { useEffect, useState } from 'react';
import { useAuth } from '../AuthProvider';
import axios from 'axios';

function Account() {
    const { user } = useAuth();
    const [account, setAccount] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [editedName, setEditedName] = useState('');
    const [editedEmail, setEditedEmail] = useState('');
    const [editedPicture, setEditedPicture] = useState(null);

    const getAccount = () => {
        axios.get("http://localhost:4000/account", {
          headers : {
            Authorization: `Bearer ${user.token}`
          }
        }).then(res => {
          setAccount(res.data);
          setEditedName(res.data[0]?.name || '');
          setEditedEmail(res.data[0]?.email || '');
          setEditedPicture(res.data[0]?.picture || '');
        }).catch(err => {
          console.log(err);
        });
      };

    useEffect(() => {
        getAccount();
    }, [user.token]);

    const name = account[0] ?. name;
    const email = account[0] ?. email;
    const picture = account[0] ?. picture;

    return (
    <>
      <h1>Account</h1>
      {JSON.stringify(account)}
      <div className = 'p-10 bg-red-100 text-white'>
        <h1>Name : {name} </h1>
        <h1>Email : {email} </h1>
        <h1>Profile : {picture} </h1>
        <img 
        src={`http://localhost:4000/${picture}`}
        alt="Profile"
        className="w-full h-full rounded-full object-cover"
        />

) : (
      </div>
    </>
    );
}

export default Account;
