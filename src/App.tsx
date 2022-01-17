import React from 'react';
import './App.scss';

import { PostList } from './components/PostList/PostList';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

const preparedPosts: Post[] = postsFromServer.map(post => ({
  ...post,
  comments: commentsFromServer.filter(c => c.postId === post.id) as Comment[],
  user: usersFromServer.find(u => u.id === post.userId) || null,
}));

const App: React.FC = () => (
  <div className="App">
    <h1>Static list of posts</h1>
    <PostList preparedPosts={preparedPosts} />
  </div>
);

export default App;
