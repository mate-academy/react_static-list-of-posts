import React from 'react';
import Post from './Post';

const PostList = ({ postList }) => (
  <div>
    <ul>
      {postList.map(post => (
        <li key={post.id}>
          <Post {...post} />
        </li>
      ))}
    </ul>
  </div>
);

export default PostList;
