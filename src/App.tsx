import React from 'react';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import { PostList } from './components/PostList';

const preparedPosts : Post[] = posts.map(post => {
  const user = users.find(person => person.id === post.userId) || null;
  const comment = comments.filter(item => (
    item.postId === post.id
  )) as Comment[];

  return { ...post, user, comment };
});

const App: React.FC = () => (
  <div className="App">
    <PostList preparedPosts={preparedPosts} />
  </div>
);

export default App;
