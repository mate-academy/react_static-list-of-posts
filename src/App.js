import React from 'react';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

import { PostsList } from './components/PostsList';

export const postsList = posts.map(post => ({
  ...post,
  user: users.find(user => user.id === post.userId),
  comments: comments.filter(comment => comment.postId === post.id),
}));

const App = () => (
  <div className="App">
    <h1>Static list of posts</h1>
    <div className="App__stats">
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
    </div>

    <PostsList posts={postsList} />
  </div>
);

export default App;
