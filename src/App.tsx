import React from 'react';

import './App.scss';

import ServerPosts from './api/posts';
import ServerComments from './api/comments';
import ServerUsers from './api/users';
import { PostList } from './components/PostList/PostList';

const preparedPosts = ServerPosts.map(post => ({
  ...post,
  user: ServerUsers.find(user => user.id === post.userId),
  comments: ServerComments.filter(comment => comment.postId === post.id),
}));

const App: React.FC = () => (
  <div className="App">
    <h1>Static list of posts</h1>
    <PostList posts={preparedPosts} />
  </div>
);

export default App;
