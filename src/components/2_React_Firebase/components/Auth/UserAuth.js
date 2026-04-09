import React, { useContext } from 'react';
import { AuthContext } from '../../Context/Auth';
import { auth } from '../../Firebase/Firebase';
import './account.module.css'

const UserAuth = () => {
  const { user } = useContext(AuthContext);
  return (
    <div id="account">
      <h1>User Account <span>using firebase authentication</span></h1>
    <div className="userAuth">
      <h1>Home Page</h1>
      <h3>Welcome {user.email}</h3>
      <button onClick={() => auth.signOut()}>Sign Out</button>
    </div>
    </div>
  );
};

export default UserAuth;