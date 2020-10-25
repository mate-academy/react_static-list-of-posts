import React from 'react';
import { User } from '../User';
import { CommentList } from '../CommentList';
import { PostShape } from '../../shapes/PostShape';
import './Post.scss';

export const Post = ({ title, body, comment, user }) => (
  <li className="post">
    <div className="post__container">
      <div className="post__title">{title}</div>
      <div className="post__text">{body}</div>
      <User {...user} />
    </div>
    <CommentList commentList={comment} />
  </li>
);

Post.propTypes = PostShape;
