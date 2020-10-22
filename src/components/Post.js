import React from 'react';
import { User } from './User';
import { CommentList } from './CommentList';
import { PostShape } from '../shapes/PostShape';

export const Post = ({ title, body, author, comments }) => (
  <div className="App__post">
    <div className="App__post-title">
      <h2>{title}</h2>
    </div>
    <div className="App__post-body">
      {body}
    </div>
    <User {...author} />
    <CommentList comments={comments} />
  </div>
);

Post.propTypes = PostShape;
