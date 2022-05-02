import React from 'react';
import { PostList } from './components/PostList';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import './App.scss';

const preparedPosts = posts.map(post => (
  {
    ...post,
    user: users.find(({ id }) => id === post.userId) || null,
    comments: comments.filter(({ postId }) => postId === post.id),
  }
));

const App: React.FC = () => (
  <div className="App">
    <PostList posts={preparedPosts} />
  </div>
);

export default App;
