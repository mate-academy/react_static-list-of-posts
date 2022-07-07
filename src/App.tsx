import React from 'react';

import './App.scss';
import { PostList } from './components/PostList/PostList';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

const preparedPosts = [...posts].map(post => (
  {
    ...post,
    comments: comments.filter(comment => comment.postId === post.id) || null,
    user: users.find(person => person.id === post.userId) || null,
  }));

const App: React.FC = () => (
  <div className="App">
    <PostList props={preparedPosts} />
  </div>
);

export default App;
