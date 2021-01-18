import React from 'react';
import { TypePost } from '../../types';

import { User } from '../User';
import { CommentList } from '../CommentList';
import './Post.scss';

export const Post = ({ post }) => (
  <div>
    <h2 className="post-tile__title">{post.title}</h2>
    <p className="post-tile__body">{post.body}</p>
    <User user={post.user} />
    <CommentList userComments={post.comment} />
  </div>
);

Post.propTypes = {
  post: TypePost.isRequired,
};
