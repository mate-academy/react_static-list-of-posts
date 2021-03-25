import React from 'react';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

import { PostList } from './components/PostList';

export const postList = posts.map(post => ({
  ...post,
  user: users.find(user => user.id === post.userId),
  comment: comments.filter(comment => comment.postId === post.id),
}));

const App = () => (
  <div className="app">
    <h1>Static list of posts</h1>

    <p>
      <span>Posts: </span>
      {posts.length}
    </p>

    <p>
      <span>Comments: </span>
      {comments.length}
    </p>

    <p>
      <span>Users: </span>
      {users.length}
    </p>
    <PostList posts={postList} />
  </div>
);

export default App;
