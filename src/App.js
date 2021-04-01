import React from 'react';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

import { PostList } from './components/PostList';

const preparePosts = posts.map(post => ({
  ...post,
  user: users.find(user => user.id === post.userId),
  usersComments: comments.filter(comment => comment.postId === post.id),
}));

const App = () => (
  <>
    <div className="App">
      <h1 className="App__title">Static list of posts</h1>

      <p className="App__description">
        <span>posts: </span>
        {posts.length}
      </p>

      <p className="App__description">
        <span>comments: </span>
        {comments.length}
      </p>

      <p className="App__description">
        <span>Users: </span>
        {users.length}
      </p>
    </div>

    <PostList list={preparePosts} />
  </>
);

export default App;
