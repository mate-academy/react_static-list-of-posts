import React from 'react';
import { PostType } from '../PostType/PostType';
import User from '../User';

export default function Post({ post }) {
  return (
    <li>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <User user={post.user} comments={post.comments} />
    </li>
  );
}

Post.propTypes = {
  post: PostType,
};

Post.defaultProps = {
  post: null,
};
