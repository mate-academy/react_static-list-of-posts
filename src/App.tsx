import React from 'react';

import './App.scss';

import PostList from './components/PostList';

import posts from './api/posts';
import comment from './api/comments';
import users from './api/users';

const preperedPosts = posts.map(post => {
  const user = users.find(person => person.id === post.userId) || null;
  const comments = comment.filter(comm => comm.postId === post.id);

  return { ...post, user, comments };
});

const App: React.FC = () => (
  <div className="App">
    <h1>Static list of posts</h1>
    <PostList posts={preperedPosts} />
  </div>
);

export default App;
