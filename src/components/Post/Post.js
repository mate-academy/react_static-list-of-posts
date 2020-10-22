import React from 'react';
import './Post.scss';

import { CommentList } from '../CommentList';
import { User } from '../User';
import { PostShape } from '../shapes/PostShape';

export const Post = ({ title, body, author, postComments }) => (
  <div className="post">
    <div className="post__info">
      <h2 className="post__title">{title}</h2>
      <p className="post__body">{body}</p>
      <User {...author} />
    </div>
    <CommentList comments={postComments} />
  </div>
);

Post.propTypes = PostShape;
