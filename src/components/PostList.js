import React from 'react';
import Post from './Post';

const PostList = props => props.posts.map(postData => (
  <Post post={postData} />
));

export default PostList;
