import React from 'react';
import User from './User';
import CommentList from './CommentList';

export default function Post(props) {
  const { title, body, comments } = props;
  const { name, email, address } = props.userInfo;
  return (
    <div className='post'>
      <p>{title}</p>
      <p>{body}</p>
      <User name={name} email={email} address={address} />
      <CommentList commentsList={comments} />
    </div>
  );
}
