import React from 'react';
import Post from './Post';
import posts from '../api/posts';

const User = ( {user} ) => (
  <div className="user-details">
    <div className="post-head">
      <h2 className="user-name">{user.name}</h2>
      <u>{user.email}</u>
    </div>
    <ul className="posts">
      {posts.filter(post => post.userId === user.id).map(post => (
        <Post post={post} />
      ))}
    </ul>
  </div>
);

export default User;
