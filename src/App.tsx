import React from 'react';
import './App.scss';
import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import { PostList } from './PostList';

const preparedPosts = posts.map(post => {
  const user = users.find(({ id }) => id === post.userId) || null;
  const commentsBox = comments.filter(({ postId }) => postId === post.id);

  return {
    ...post,
    user,
    commentsBox,
  };
});

const App: React.FC = () => (
  <div className="App">
    <PostList posts={preparedPosts} />
  </div>
);

export default App;
