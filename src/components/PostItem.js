import React from 'react';
import User from './User';
import Comment from './Comment';

const PostItem = ({postItem}) => (
  <div className="post">
    <h2>{postItem.post.title}</h2>
    <p>{postItem.post.body}</p>
    <User user={postItem.user} />
    <div>
      <h3>Comments:</h3>
      {postItem.comments.map(comment => <Comment currentComment = {comment} />)}
    </div>
  </div>
);

export default PostItem;
