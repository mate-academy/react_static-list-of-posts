import React from 'react';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import { PostList } from './components/PostList/PostList';

const usersPosts = posts.map(post => ({
  ...post,
  user: users.find(user => user.id === post.userId),
  comments: comments.filter(comment => comment.postId === post.id),
}));

const App = () => (
  <div className="App">
    <h1 className="App__header">Static list of posts</h1>

    <div className="App__info">
      <p>
        <span>posts: </span>
        {posts.length}
      </p>

      <p>
        <span>comments: </span>
        {comments.length}
      </p>

      <p>
        <span>Users: </span>
        {users.length}
      </p>
    </div>

    <PostList posts={usersPosts} />
  </div>
);

export default App;
