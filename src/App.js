import React from 'react';
import { PostList } from './components/PostList/PostList';

import './App.scss';

import posts from './api/posts';
import comms from './api/comments';
import users from './api/users';

const preparedPosts = posts.map((post) => {
  const user = users.find(person => person.id === post.userId);
  const comments = comms.filter(commnt => post.id === commnt.postId);

  return {
    ...post,
    user,
    comments,
  };
});

const App = () => (
  <div className="App">
    <h1>Static list of posts</h1>
    <PostList prepPosts={preparedPosts} />
  </div>
);

export default App;
