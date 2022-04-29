import React from 'react';
import { Post } from './types/Post';
import { PostList } from './components/PostList/index';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

const preparedPosts: Post[] = posts.map((post) => ({
  ...post,
  user: users.find((user) => user.id === post.userId),
  comments: comments.filter((comment) => comment.postId === post.id),
}));

const App: React.FC = () => (
  <div className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList list={preparedPosts} />
  </div>
);

export default App;
