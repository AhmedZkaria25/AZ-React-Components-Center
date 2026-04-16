import React, { useContext } from 'react';
import { AuthContext, AuthProvider } from '../../Context/Auth';
import { auth } from '../../Firebase/Firebase';
import styles from './account.module.css'

const UserAuth = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className={styles.account_2}>
      <h1>User Account <span>using firebase authentication</span></h1>
      <div className={styles.userAuth}>
        <h1>Home Page</h1>
        <h3>Welcome {user?.email}</h3>
        <button onClick={() => auth.signOut()}>Sign Out</button>
      </div>
    </div>
  );
};

export default UserAuth;