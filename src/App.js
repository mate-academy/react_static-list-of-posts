import React from 'react';

import { PostList } from './components/PostList';
import './App.scss';

import postsFromServer from './api/posts';
import comments from './api/comments';
import users from './api/users';

const posts = [...postsFromServer].map(post => ({
  ...post,
  user: users.find(user => user.id === post.userId),
  comments: comments.filter(comment => comment.postId === post.userId),
}));

const App = () => (
  <div className="App">
    <h1>Static list of posts</h1>
    <PostList posts={posts} />
    <p>
      <span>posts: </span>
      {postsFromServer.length}
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
);

export default App;
