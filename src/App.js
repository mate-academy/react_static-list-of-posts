import React from 'react';
import { PostList } from './components/post-list';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

const postsBlocks = posts.map(post => ({
  ...post,
  user: users.find(user => user.id === post.userId),
  comments: comments.filter(comment => comment.postId === post.id),
}));

const App = () => (
  <div className="App">
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
    <PostList postsBlocks={postsBlocks} />
  </div>
);

export default App;
