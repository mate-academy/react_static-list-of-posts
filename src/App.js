import React from 'react';

import './App.scss';

import { PostList } from './components/PostList';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

const preparedPosts = posts.map(post => ({
  ...post,
  user: users.find(person => (post.userId === person.id)),
  comments: comments.filter(comment => (comment.postId === post.id)),
}));

const App = () => (
  <div className="App">
    <header className="header">
      <h1>Static list of posts</h1>

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
    </header>

    <main className="main">
      <PostList postsList={preparedPosts} />
    </main>
  </div>
);

export default App;
