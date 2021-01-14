import React from 'react';
import './Post.scss';
import { UsersPropTypes } from '../Type/type';
import { User } from '../User/User';
import { CommentList } from '../CommentList/CommentList';

export const Post = ({ title, body, user, postComments }) => (
  <div className="post">
    <div className="post__header">
      <div className="post__title">{title}</div>
      <div className="post__body">{body}</div>
      <User {...user} />
    </div>
    <CommentList comments={postComments} />
  </div>
);

Post.propTypes = UsersPropTypes.isRequired;
