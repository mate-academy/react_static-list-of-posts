import React from 'react';
import Post from './Post';

import {PostListShape} from '../types';

const PostList = ({posts}) => (
  <ul>
    {posts.map(post => (
      <li key={post.id}>
        <Post post = {post} />
      </li>
    ))}
  </ul>
)

PostList.propTypes = {
  posts: PostListShape.isRequired,
}

export default PostList;
