import React from 'react';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import users from './api/users';
import { PostList } from './components/PostList';

const preparedPosts = postsFromServer.map(post => {
  const user = users.find(({ id }) => id === post.userId)
    || null;
  const comments = commentsFromServer.filter(comment => (
    comment.postId === post.id
  )) || null;

  return {
    ...post,
    user,
    comments,
  };
});

const App: React.FC = () => (
  <div className="App">
    <h1 className="text-center">Static list of posts</h1>
    <PostList posts={preparedPosts} />
  </div>
);

export default App;
