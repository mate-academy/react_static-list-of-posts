import React from 'react';
import { User } from '../User/User';
import { CommentList } from '../CommentList/CommentList';
import { PostShape } from '../Shapes/PostShape';

import './Post.scss';

export const Post = ({ title, body, user, comments }) => (
  <div className="post">
    <div className="post__title">
      <strong>{title}</strong>
    </div>
    <div className="post__body">{body}</div>
    <User {...user} />
    <CommentList comments={comments} />
  </div>
);

Post.propTypes = PostShape;
