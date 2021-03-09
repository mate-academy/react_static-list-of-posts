import React from 'react';
import { postType } from '../../types';
import { User } from '../User';
import { CommentList } from '../CommentList';

import './Post.css';

export function Post({ post }) {
  return (
    <div className="post__content">
      <h2 className="post__title">{post.title}</h2>
      <p>{post.body}</p>
      <User user={post.user} />
      <CommentList comments={post.comments} />
    </div>
  );
}

Post.propTypes = {
  post: postType.isRequired,
};
