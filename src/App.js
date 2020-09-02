import React from 'react';
import { PostList } from './components/PostList/PostList';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

const posts = postsFromServer.map(post => ({
  ...post,
  user: usersFromServer.find(user => user.id === post.userId),
  comments: commentsFromServer.filter(comment => comment.postId === post.id),
}));

const App = () => (
  <div className="App">
    <main className="main">
      <PostList posts={posts} />
    </main>
  </div>
);

export default App;
