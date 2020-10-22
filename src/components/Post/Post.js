import React from 'react';
import { PostsShape } from '../../shapes/PostsShape';
import { User } from '../User/User';
import { CommentList } from '../CommentList/CommentList';

import './Post.scss';

export const Post = ({ title, body, user, comments }) => (
  <article className="post">
    <h1 className="post__title">
      {title}
    </h1>
    <hr />
    <p className="post__body">
      {body.replace(/^[a-z]/, c => c.toUpperCase())}
      {'.'}
    </p>
    <User {...user} />
    <CommentList comments={comments} />
  </article>
);

Post.propTypes = PostsShape;
