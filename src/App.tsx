import React from 'react';

import './App.scss';

import getPosts from './api/posts';
import getComments from './api/comments';
import getUsers from './api/users';
import { PostList } from './components/PostList';

const preparedPosts = getPosts.map(post => {
  const user = getUsers.find(({ id }) => id === post.userId) || null;
  const comments = getComments.filter(comment => comment.postId === post.id);

  return {
    ...post,
    user,
    comments,
  };
});

const App: React.FC = () => (
  <div className="App">
    <h1 className="tac">Static list of posts</h1>
    <PostList posts={preparedPosts} />
  </div>
);

export default App;
