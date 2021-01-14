import React from 'react';
import { PostType } from './types';
import { CommentList } from './CommentList';
import { User } from './User';
import './Post.scss';

export const Post = ({ title, body, author, comments }) => (
  <div className="post">
    <h2 className="post__title">{title}</h2>
    <p className="post__text">{body}</p>
    <User {...author} />
    <CommentList comments={comments} />
  </div>
);

Post.propTypes = PostType.isRequired;
