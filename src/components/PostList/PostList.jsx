import React from 'react';

import { Post } from '../Post';
import { PostListShape } from '../../shapes/PostListShape';

export const PostList = ({ posts }) => (
  <div>
    {posts.map(post => (
      <Post {...post} key={post.id} />
    ))}
  </div>
);

PostList.propTypes = PostListShape;
