import React from 'react';
import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

import { PostList } from './components/PostList';

const preparedPosts = posts.map(
  post => ({
    ...post,
    author: users.find(
      person => person.id === post.userId,
    ),
    comments: comments.filter(
      comment => comment.postId === post.id,
    ),
  }),
);

const App = () => (
  <div className="App column is-half container">
    <div className="stats box block content">
      <h1 className="title is-2">Static list of posts</h1>

      <table>
        <thead>
          <tr>
            <th>Posts</th>
            <th>Comments</th>
            <th>Users</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{posts.length}</td>
            <td>{comments.length}</td>
            <td>{users.length}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <PostList posts={preparedPosts} />
  </div>
);

export default App;
