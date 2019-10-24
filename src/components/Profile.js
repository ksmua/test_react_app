import React from 'react';
import User from './User';
import Palette from './Palette';

const Profile = () => {
  return (
    <div className="container profile">
      <User
        src="https://img.icons8.com/plasticine/2x/user.png"
        alt="man"
        name="Scott"
      />
      <Palette />
    </div>
  )
}

export default Profile;