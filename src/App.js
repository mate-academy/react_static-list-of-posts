import React from 'react';

import { PostList } from './components/PostList';
import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

function findUser(userId) {
  return users.find(user => user.id === userId);
}

function findComment(id) {
  return comments.filter(comment => comment.postId === id);
}

const wholePost = posts.map((post) => {
  const copy = {
    ...post,
    user: findUser(post.userId),
    comment: findComment(post.id),
  };

  return copy;
});

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

    <PostList whole={wholePost} />
  </div>
);

export default App;
