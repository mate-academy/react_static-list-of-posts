import React from 'react';
import { CommentList } from '../CommentList';
import { User } from '../User';
import { PostType } from '../../types';
import './Post.scss';

export const Post = ({ title, body, postUser, comments }) => (
  <div className="post">
    <h2>{title}</h2>
    <p>{body}</p>
    <User {...postUser} />
    <CommentList comments={comments} />
  </div>
);

Post.propTypes = PostType;

Post.defaultProps = {
  address: {},
  commenters: [],
};
