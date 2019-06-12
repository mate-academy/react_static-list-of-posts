import React from 'react';
import { User } from './User';
import { CommentList } from './CommentList';
import './PostItem.css';

export function Post(props) {
  const {
    title,
    body,
    user,
    postComments,
  } = props;

  return (
    <div className="post-item">
      <h3>{title}</h3>
      <p>{body}</p>
      <User 
        name={user.name} 
        email={user.email} 
        address={user.address} 
      />
      <CommentList comments={postComments} />
    </div>
  );
}
