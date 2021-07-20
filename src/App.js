import React from 'react';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import { PostList } from './components/postlist/postlist';

const preparedPosts = posts.map((post) => {
  const user = users.find(person => person.id === post.userId);
  const filtered = comments.filter(commentary => post.id === commentary.postId);

  return {
    ...post,
    user,
    filtered,
  };
});

const App = () => <PostList preparedPosts={preparedPosts} />;

export default App;
