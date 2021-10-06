import React from 'react';

import './App.scss';
import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import { Post } from './components/types/Post';
import { PostList } from './components/PostList/PostList';

export const preparedPosts: Post[] = posts.map(post => ({
  ...post,
  user: users.find(user => user.id === post.userId),
  usersComments: comments.filter(comment => comment.postId === post.id),
}));

const App: React.FC = () => (
  <div className="App">
    <h1>Static list of posts</h1>
    <PostList posts={preparedPosts} />
  </div>
);

export default App;
