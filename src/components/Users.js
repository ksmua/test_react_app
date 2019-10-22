import React from 'react';

import User from './User';

export default function Users () {
  return (
    <div className="right">
      <User
        src = "https://img.icons8.com/plasticine/2x/user.png"
        alt = "man"
        name = "Scot"
       // min = {true}
      />
      <div className="users__block">
          <User
            src = "https://img.icons8.com/plasticine/2x/user.png"
            alt = "man"
            name = "Scot"
            min
          />
          
          <User
            src = "https://img.icons8.com/plasticine/2x/user.png"
            alt = "man"
            name = "Scot"
            min
          />
          
          <User
            src = "https://img.icons8.com/plasticine/2x/user.png"
            alt = "man"
            name = "Scot"
            min 
          />
          
          <User
            src = "https://img.icons8.com/plasticine/2x/user.png"
            alt = "man"
            name = "Scot"
            min 
          />
      </div>
    </div>
  )
}