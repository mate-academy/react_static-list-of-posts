import React from 'react';
import { TypeOfPost } from '../../types';

import { User } from '../User';
import { CommentList } from '../CommentList';

import './Post.scss';

export const Post = ({ body, title, comments, user }) => (
  <div className="post">
    <User user={user} />
    <h2 className="post__title">{title}</h2>
    <div className="post__body">{body}</div>
    <CommentList comments={comments} />
  </div>
);

Post.propTypes = TypeOfPost.isRequired;
