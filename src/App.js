import React from 'react';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

import { PostList } from './components/PostList';

const addresses = users.map(user => ({
  ...user,
  address: `${user.address.suite}, `
    + `${user.address.street}, `
    + `${user.address.city}, `
    + `${user.address.zipcode}`,
}));

const preparedPosts = posts.map(post => ({
  ...post,
  user: addresses.find(user => user.id === post.userId),
  comments: comments.filter(item => item.postId === post.id),
}));

const App = () => (
  <main className="App">
    <div>
      <h1>Static list of posts</h1>
      <PostList posts={preparedPosts} />
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
    </div>
  </main>
);

export default App;
