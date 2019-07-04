import React from 'react';
import User from './User';
import Comment from './Comment';

const PostItem = props => (
  <div className="post">
    <h2>{props.postItem.post.title}</h2>
    <p>{props.postItem.post.body}</p>
    <User user={props.postItem.user} />
    <div>
      <h3>Comments:</h3>
      {props.postItem.comments.map(comment => <Comment comment={comment} />)}
    </div>
  </div>
);

export default PostItem;
