import React from 'react';

import UserData from './UserData';
import CommentList from './CommentsList';

const PostList = props => (
  <div className="post-list">
    <h2>{props.postOfList.post.title}</h2>
    <p>{props.postOfList.post.body}</p>
    <UserData user={props.postOfList.user} />
    <div>
      <h3>Comments:</h3>
      {props.postOfList.comments.map(comment => <CommentList comment={comment} />)}
    </div>
  </div>
);

export default PostList;
