import React from 'react';
import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import { PostsList } from './components/PostsList';

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

export interface Comment {
  id: number;
  postId: number;
  name: string;
  email: string,
  body: string,
}

export interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
  user?: User;
  comments: Comment[];
}

const preparedPosts: Post[] = posts.map(post => ({
  ...post,
  user: users.find(user => user.id === post.userId),
  comments: comments.filter(comment => comment.postId === post.id),
}));

const App: React.FC = () => (
  <div className="App">
    <h1>Static list of posts</h1>
    <PostsList posts={preparedPosts} />
  </div>
);

export default App;
