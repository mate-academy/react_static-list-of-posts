import React from 'react';
import { User } from './User';
import { CommentList } from './CommentList';
import { PostShape } from './types';

export const Post = ({ user, title, body, comments }) => (
  <>
    <h2 style={{ color: 'green' }}>{title}</h2>
    <p>{body}</p>
    <User {...user} />
    <CommentList comments={comments} />
  </>
);

Post.propTypes = PostShape.isRequired;
