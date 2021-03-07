import React from 'react';
import { User } from './User';
import { CommentList } from './CommentList';
import { postType } from '../types';

export const Post = ({ title, body, user, comments }) => (
  <>
    <h2>{title}</h2>
    <p className="post__text">{body}</p>
    <User user={user} />
    <CommentList comments={comments} />
  </>
);

Post.propTypes = postType;
