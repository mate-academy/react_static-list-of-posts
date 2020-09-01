import React from 'react';
import { CommentList } from '../CommentList';
import { User } from '../User';
import { PostShape } from '../PropTypes';

import './Post.css';

export const Post = ({ title, body, author, comments }) => (
  <>
    <p className="author">
      <User {...author} />
    </p>
    <h2>{title}</h2>
    <p className="post-text">
      {body}
    </p>
    <CommentList comments={comments} />
  </>
);

Post.propTypes = PostShape;
