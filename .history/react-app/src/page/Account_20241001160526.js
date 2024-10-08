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
          headers: {
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

    const name = account[0]?.name;
    const email = account[0]?.email;
    const picture = account[0]?.picture;

    const handleSave = () => {
        const formData = new FormData();
        formData.append("name", editedName);
        formData.append("email", editedEmail);
        formData.append("picture", editedPicture);
    
        axios.put("http://localhost:4000/update-account", formData, {
    
          headers: {
    
            Authorization: `Bearer ${user.token}`,
    
            "Content-Type" : "multipart/form-data"
    
          }
    
        }).then(() => {
    
          getAccount();
    
          setShowModal(false);
    
        }).catch(err => {
    
          console.log(err);
    
        });
    
      };
    
      

    return (
    <>
      <h1>Account</h1>
      {JSON.stringify(account)}
      <div className='p-10 bg-red-100 text-black'>
        <h1>Name: {name}</h1>
        <h1>Email: {email}</h1>
        <h1>Profile: {picture}</h1>
        {picture ? (
          <img 
            src={`http://localhost:4000/${picture}`}
            alt="Profile"
            className="w-full h-full rounded-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-200 rounded-full">
            <span className="text-gray-500">N/A</span>
          </div>
        )}
      </div>
      <div className="my-3 flex justify-center">
        <button onClick={() => setShowModal(true)} className="p-2 bg-blue-500 rounded hover:bg-blue-400">
          แก้ไขข้อมูล
        </button>
      </div>
    </>
    );
}

export default Account;
