import React from 'react';
import { User } from '../User/User';
import { CommentList } from '../CommentList/CommentList';
import { typePost } from '../../types';
import './Post.scss';

export const Post = ({ title, body, user, comments }) => (
  <div className="post posts__post">
    <h2 className="post__title">{title}</h2>
    <p className="post__text">{body}</p>
    <User {...user} />
    <CommentList comments={comments} />
  </div>
);
Post.propTypes = typePost.isRequired;
