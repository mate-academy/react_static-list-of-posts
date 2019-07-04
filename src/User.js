import React from 'react';

function User({ authorData }) {
  return (
    <div className="author">
      <span className="itemTitle">Name: </span>
      <span> {authorData.name}, </span>
      <span className="itemTitle"> e-mail: </span> 
      <span>{authorData.email}, </span>
      <span className="itemTitle"> Address: </span> 
      <span>{authorData.address.street}, </span>
      <span>{authorData.address.suite}, </span>
      <span>{authorData.address.city}</span>
    </div>
  );
}

export default User;