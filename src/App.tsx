import React from 'react';
import { PostList } from './components/PostList';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

const preparedPosts = posts.map(post => {
  const user = users.find(person => person.id === post.userId) || null;
  const comment = comments.filter(item => item.postId === post.id) || null;

  return { ...post, user, comment };
});

const App: React.FC = () => (
  <div className="App">
    <PostList preparedPosts={preparedPosts} />
  </div>
);

export default App;
