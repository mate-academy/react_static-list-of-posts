import React from 'react';
import User from './User';

export default function Comment(props) {
  const { name, email, body } = props;

  return (
    <div className="comment">
      <p>{body}</p>
      <User name={name} email={email} />
    </div>
  );
}
