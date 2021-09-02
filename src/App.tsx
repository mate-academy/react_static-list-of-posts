import React from 'react';
import { PostList } from './components/PostList/PostList';
import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

const preparedPosts = posts.map(post => {
  const user = users.find(person => person.id === post.id) || null;
  const comment = comments.filter(commentOne => commentOne.postId === post.id);

  return { user, comment, ...post };
});

const App: React.FC = () => (
  <div className="App">
    <PostList posts={preparedPosts} />
  </div>
);

export default App;
