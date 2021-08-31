import React from 'react';

import './App.scss';

import posts from './api/posts';
import commentsList from './api/comments';
import users from './api/users';
import { PostList } from './components/PostList';

const preparedPosts = posts.map(post => {
  const user = users.find(person => person.id === post.userId) || null;
  const comments = commentsList.filter(message => message.postId === post.id);

  return { ...post, user, comments };
});

const App: React.FC = () => (
  <div className="App">
    <h1>Static list of posts</h1>
    <PostList posts={preparedPosts} />
  </div>
);

export default App;
