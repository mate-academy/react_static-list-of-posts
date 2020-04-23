import React from 'react';
import Post from './Post';

function PostList({ post }) {
  return post.map(item => <Post key={item.id} postItem={item} />);
}

export default PostList;
