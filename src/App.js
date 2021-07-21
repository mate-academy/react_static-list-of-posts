import React from 'react';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import { PostList } from './components/postlist/postlist';

const preparedPosts = posts.map((post) => {
  const user = users.find(person => person.id === post.userId);
  const filteredComent = comments.filter(comment => post.id === comment.postId);

  return {
    ...post,
    user,
    filteredComent,
  };
});

const App = () => <PostList posts={preparedPosts} />;

export default App;
