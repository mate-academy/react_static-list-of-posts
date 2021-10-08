import React from 'react';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
import { PostList } from './components/PostList/PostList';

const preparedPosts = postsFromServer.map(post => ({
  ...post,
  user: usersFromServer.find(({ id }) => id === post.userId) || null,
  comments: commentsFromServer.filter(comment => comment.postId === post.id),
}));

const App: React.FC = () => (
  <div className="App">
    <PostList posts={preparedPosts} />
  </div>
);

export default App;
