import React from 'react';

import './App.css';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

import PostList from './components/PostList/PostList';

function getPostsWithUsersAndComments() {
  const usersMap = new Map();
  const commentsMap = new Map();

  users.forEach((user) => {
    usersMap.set(user.id, user);
  });
  comments.forEach((comment) => {
    const indicator = commentsMap.get(comment.postId);

    if (!indicator) {
      const commentMapValue = [];

      commentMapValue.push(comment);
      commentsMap.set(comment.postId, commentMapValue);
    } else {
      const commentMapValue = [...indicator];

      commentMapValue.push(comment);
      commentsMap.set(comment.postId, commentMapValue);
    }
  });

  return posts.map(post => ({
    ...post,
    user: usersMap.get(post.userId),
    comments: commentsMap.get(post.id),
  }));
}

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
    <PostList posts={getPostsWithUsersAndComments()} />
  </div>
);

export default App;
