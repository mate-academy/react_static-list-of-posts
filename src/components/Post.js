import React from 'react';
import CommentList from './CommentList';
import User from './User';
import './Post.css';

function Post(props) {
  return (
    <article className='post'>
      <p className='post-title'>Title: {props.title}</p>
      <p className='post-body'>{props.body}</p>
      <User name={props.name} email={props.email} adress={props.adress} />
      <CommentList postId={props.postId} />
    </article>
  );
}

export default Post;
