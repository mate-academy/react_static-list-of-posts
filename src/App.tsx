import React from 'react';
import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

import { PostList } from './components/PostList/PostList';

const preparedPosts = posts.map(post => {
  const user = users.find(({ id }) => id === post.userId);
  const commentsArr = comments.filter(item => (item.postId === post.id));

  return {
    ...post,
    user: user || null,
    comments: commentsArr || null,
  };
});

const App: React.FC = () => (
  <div className="app">
    <h1 className="app__title">Static list of posts</h1>
    <PostList post={preparedPosts} />
  </div>
);

export default App;
