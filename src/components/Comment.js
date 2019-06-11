import React from 'react';

function Comment(props) {

  const {name, email, text} = props;

  return (
    <div className='comment'>
      <span className='name'>{name}</span>
      <span className='email'><a href={email}>{email}</a></span>
      <p>{text}</p>
    </div>
  );
}

export default Comment;
