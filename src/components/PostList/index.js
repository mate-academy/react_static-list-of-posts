import React from 'react';
import { postListShape } from './postlistShape';
import Post from '../Post';
import './PostList.css';

function PostList({ posts }) {
  return (
    <ul className="postList">
      {
        posts.map(post => (
          <li key={post.id}>
            <Post {...post} />
          </li>
        ))
      }
    </ul>
  );
}

PostList.propTypes = postListShape;

export default PostList;
