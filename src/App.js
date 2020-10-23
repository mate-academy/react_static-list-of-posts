import React from 'react';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

import { PostList } from './components/PostList/PostList';

const preperedPosts = (
  posts.map(post => ({
    ...post,
    user: users.find(user => user.id === post.userId),
    comments: comments.filter(comment => comment.postId === post.id),
  }))
);

const App = () => (
  <div className="app">
    <h1 className="app__title">Static list of posts</h1>
    <div className="app__info">
      <div className="app__text">
        <span>posts: </span>
        {posts.length}
      </div>

      <div className="app__text">
        <span>comments: </span>
        {comments.length}
      </div>

      <div className="app__text">
        <span>users: </span>
        {users.length}
      </div>
    </div>

    <PostList posts={preperedPosts} />
  </div>
);

export default App;
