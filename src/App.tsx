import React from 'react';
import './App.scss';

import { PostList } from './components/PostList/PostList';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

const preparedPosts: Post[] = postsFromServer.map(post => ({
  ...post,
  commentaries: commentsFromServer.filter(commentary => commentary.postId === post.id),
  user: usersFromServer.find(user => user.id === post.userId) || null,
}));

const App: React.FC = () => (
  <div className="App">
    <h1>Static list of posts</h1>
    <PostList preparedPosts={preparedPosts} />
  </div>
);

export default App;
