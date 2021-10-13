import React from 'react';
import { PostList } from './components/PostList';
import './App.scss';

import posts from './api/posts';
import commentsArray from './api/comments';
import users from './api/users';

const preparedPosts = posts.map((post) => {
  const user = users.find(person => person.id === post.userId) || null;
  const comments = commentsArray.filter(element => element.postId === post.id) as Comment[];

  return { ...post, user, comments };
});

const App: React.FC = () => (
  <div className="App">
    <h1>Static list of posts</h1>
    <PostList posts={preparedPosts} />
  </div>
);

export default App;
