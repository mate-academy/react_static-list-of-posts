import React from 'react';
import Post from './Post';

const PostList = props => props.posts.map(post => (
  <Post post={post} />
));

export default PostList;
