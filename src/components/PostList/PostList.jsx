import React from 'react';
import Post from '../Post/Post';

const PostList = ({ preparedPosts }) => (
  <ul>
    { preparedPosts.map(post => <Post {...post} key={post.id}/>) }
  </ul>
);

export default PostList;