import Login from './Login';
import React, { useState, useContext } from 'react';
import { LoginContext } from '../Contexts/LoginContext';

const Profile = () => {
  const { username, showProfile } = useContext(LoginContext);
  return (
    <>
      <h1>Profile</h1>
      <h2>Username: {username} </h2>
      <h2>setShowProfile: {showProfile} </h2>
    </>
  );
};

export default Profile;
