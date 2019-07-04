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
      {posts.filter(post => post.userId === user.id).map(postData => (
        <Post post={postData} />
      ))}
    </ul>
  </div>
);

export default User;
