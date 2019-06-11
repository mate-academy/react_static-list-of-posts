import React from 'react';
import User from './User';
import CommentList from './CommentList';

function Post(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <span>{props.body}</span>
      <User {...props.user}/>
      <CommentList postComments={props.postComments} />
      <hr/>
    </div>
  );
}

export default Post;
