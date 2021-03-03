import React from 'react';

import './PostList.css';
import { Post } from '../Post';
import { PostListType } from '../Types';

export const PostList = ({ posts }) => (
  <div className="posts">
    {posts.map(post => (
      <Post {...post} key={post.id} />
    ))}
  </div>
);

PostList.propTypes = PostListType.isRequired;
