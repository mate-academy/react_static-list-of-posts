import React from 'react';
import { PostShape } from '../../shapes/PostShape';
import { User } from '../User/User';
import { CommentList } from '../CommentList/CommentList';

import './Post.scss';

export const Post = ({ title, body, user, comments }) => (
  <article className="post">
    <h1 className="post__title">
      {title}
    </h1>
    <p className="post__body">
      {body.replace(/^[a-z]/, letters => letters.toUpperCase())}
      {'.'}
    </p>
    <User {...user} />
    <CommentList comments={comments} />
  </article>
);

Post.propTypes = PostShape;
