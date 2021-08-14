import React from 'react';

const User = ({ name, email, address}) => (
  <>  
    <p>{name}</p>
    <p>{email}</p>
    <p>{address}</p>
  </>
);

export default User;
