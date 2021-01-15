import React from 'react';
import { CommentList } from '../CommentList';
import { User } from '../User';
import { PostType } from '../../types';
import './Post.scss';

export const Post = ({ title, body, author, comments }) => (
  <div className="post">
    <h3 className="post__title">{title}</h3>
    <p className="post__text">{body}</p>
    <User {...author} />
    <CommentList comments={comments} />
  </div>
);

Post.propTypes = PostType.isRequired;
