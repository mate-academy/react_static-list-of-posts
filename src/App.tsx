import React from 'react';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import { Post } from './components/Types/Types';
import { PostList } from './components/PostList/PostList';

const preparedPosts: Post[] = posts.map(item => {
  const obj: Post = { ...item };

  obj.user = users.find(user => user.id === obj.userId);
  obj.comments = comments.find(comment => comment.id === obj.id);

  return obj;
});

const App: React.FC = () => (
  <div className="App">
    <h1>Static list of posts</h1>
    <PostList preparedPosts={preparedPosts} />
  </div>
);

export default App;
