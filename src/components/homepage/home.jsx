import { ref, set } from 'firebase/database';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { db } from '../../firebase';

const HomePage = () => {
  const [ircount, setName] = useState('');
  
  const [successMessage, setSuccessMessage] = useState('');
  
  const Push = () => {
    // const database = getDatabase();
    const dbRef = ref(db, 'streetlight');
    
    set(dbRef, {
      ircount: ircount
      
    })
      .then(() => {
        setSuccessMessage('Data inserted successfully!');
      })
      .catch((error) => {
        console.error('Error inserting data: ', error);
        // Display a more informative error message to the user
        setSuccessMessage('Failed to insert data. Please try again later.');
      });
  };
  
  return (
    <div style={{ marginTop: 250 }}>
      <center>
        <input
          placeholder="Enter your name"
          value={ircount}
          onChange={(e) => setName(e.target.value)}
        />
        <br /><br />
       
        <button onClick={Push}>PUSH</button>
        {successMessage && <p>{successMessage}</p>}
      </center>
      <Link to="/">
        <button>Login</button>
      </Link>
    </div>
  );
};

export default HomePage;
