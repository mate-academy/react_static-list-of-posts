import React from 'react';
import { CommentList } from '../CommentList';
import { User } from '../User';
import { postType } from '../../types';
import './Post.scss';

export const Post = ({
  title,
  body,
  user,
  comments,
}) => (
  <li className="post-list__item post">
    <User {...user} />
    <h2 className="post__title">{title}</h2>
    <p className="post__paragraph">{body}</p>
    <CommentList comments={comments} />
  </li>
);

Post.propTypes = postType;
