import React from 'react';
import { PostShape } from '../shapes/PostShape';
import { User } from './User';
import { CommentList } from './CommentList';

export const Post = ({ title, body, user, comments }) => (
  <div className="App__post">
    <div className="App__title">{title}</div>
    <div className="App__body">{body}</div>
    <User {...user} />
    <CommentList comments={comments} />
  </div>
);

Post.propTypes = PostShape;
