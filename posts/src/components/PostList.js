import React from 'react';
import Post from './Post';

function PostList(props) {
  const postItems = props.postList.map(post => <Post {...post} key={post.id} />);
  return (
    <div>
      <h1>Post List</h1>
      <div>{postItems}</div>
    </div>
  );
}

export default PostList;
