/* eslint-disable no-console */
import React from 'react';

import './App.css';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import PostsList from './components/PostsList/PostsList';

function findAuthor(userId) {
  const person = users.filter(user => user.id === userId);
  const address = Object.entries(person[0].address)
    .slice(0, 4)
    .map(option => option.join(' : '))
    .join(', ');

  return [person[0].name, person[0].email, address];
}

function findComments(id) {
  return comments.filter(comment => comment.postId === id);
}

const prepearedPosts = posts.map(post => ({
  ...post,
  author: findAuthor(post.userId)[0],
  email: findAuthor(post.userId)[1],
  address: findAuthor(post.userId)[2],
  comments: findComments(post.id),
}));

// console.log(prepearedPosts);

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
    <PostsList list={prepearedPosts} />
  </div>
);

export default App;
