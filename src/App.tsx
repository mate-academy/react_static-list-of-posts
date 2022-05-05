import React from 'react';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

import { Comment } from './Types/Comment';
import { Post } from './Types/Post';
import { User } from './Types/User';

import { PostList } from './components/PostList/PostList';

const preparedPosts: Post[] = posts.map((post) => ({
  ...post,
  user: users.find((user: User) => user.id === post.userId) || null,
  comments: comments
    .filter((comment: Comment) => comment.postId === post.id) || null,
}));

const App: React.FC = () => (
  <div className="App">
    <h1>Static list of posts</h1>
    <PostList posts={preparedPosts} />
  </div>
);

export default App;
