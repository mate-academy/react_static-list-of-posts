import React from 'react';

import './App.scss';

import serverPosts from './api/posts';
import serverComments from './api/comments';
import serverUsers from './api/users';
import { PostList } from './components/PostList/PostList';

const preparedPosts: Post[] = serverPosts.map((post) => ({
  ...post,
  user: serverUsers.find((user) => user.id === post.userId) || null,
  comments: serverComments.filter((comment) => comment.postId === post.id) || null,
}));

const App: React.FC = () => (
  <div className="App">
    <PostList posts={preparedPosts} />
  </div>
);

export default App;
