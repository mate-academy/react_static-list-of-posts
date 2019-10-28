import React from 'react';
import Post from '../Post/Post';
import './PostList.css';

function PostList(props) {
  // eslint-disable-next-line react/prop-types
  const { posts } = props;

  return (
    <ul className="post-list">
      {posts.map(post => (
        <Post post={post} key={post.id} />
      ))}
    </ul>
  );
}

export default PostList;
