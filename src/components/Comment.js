import React from 'react';
import User from './User';

export default function Comment(props) {
  return (
    <div className='comment'>
      <User name={props.name} email={props.email} />
      <p className='comment-body'>{props.body}</p>
    </div>
  );
}
