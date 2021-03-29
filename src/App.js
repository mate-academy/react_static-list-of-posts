import React from 'react';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

import { PostList } from './components/PostList';

const preparePosts = [];

posts.forEach((post) => {
  const postItem = post;

  postItem.user = users
    .find(user => user.id === postItem.userId);
  postItem.usersComments = comments
    .filter(comment => comment.postId === postItem.id);

  preparePosts.push(postItem);
});

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
