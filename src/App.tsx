import * as React from 'react';
import { PostList } from './components/PostList/PostList';
import { ReadyPost } from './types';
import './App.scss';

import comments from './api/comments';
import posts from './api/posts';
import users from './api/users';

const preparedPosts: ReadyPost[] = posts.map(post => ({
  ...post,
  user: users.find(user => user.id === post.userId) || null,
  comments: comments.filter(comment => comment.postId === post.id),
}));

const App: React.FC = () => (
  <div className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList postList={preparedPosts} />
  </div>
);

export default App;
