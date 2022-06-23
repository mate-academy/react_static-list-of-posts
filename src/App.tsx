import React from 'react';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import { PreparedPost } from './types/interfaces';
import { PostList } from './components/PostList/PostList';

const preparedPosts: PreparedPost[] = posts.map((post) => (
  {
    ...post,
    user: users.find(user => post.userId === user.id) || null,
    comments: comments.filter(comment => comment.postId === post.id),
  }
));

const App: React.FC = () => (
  <div className="App">
    <h1>Static list of posts</h1>
    <PostList postList={preparedPosts} />
  </div>
);

export default App;
