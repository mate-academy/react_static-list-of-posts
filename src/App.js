import React from 'react';
import './App.css';

import posts from './api/posts';
import users from './api/users';

function App() {
  return (
    <div className="posts-list">
      {posts.map((post) => {
        const postUser = users.find(user => user.id === post.userId);

        return (
          <div className="post">
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <div className="user-info">
              <span>{postUser.name}</span>
              <a href={`mailto:${postUser.email}`}>{postUser.email}</a>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
