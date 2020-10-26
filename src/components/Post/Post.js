import React from 'react';

import './Post.scss';

import { User } from '../User';
import { CommentList } from '../CommentList';
import { PostPropTypes } from '../PropTypes/PostPropTypes';

export const Post = ({ body, title, user, comments }) => (
  <article className="post">
    <div className="post__text">
      <User {...user} />
      <h2 className="post__title">{title}</h2>
      <p>{body}</p>
    </div>
    <div>
      <CommentList comments={comments} />
    </div>
  </article>
);

Post.propTypes = PostPropTypes;
