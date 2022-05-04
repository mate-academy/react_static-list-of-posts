import React from 'react';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

import { PostsList } from './components/PostList/PostsList';

import { Post } from './types/Posts';
import { Comment } from './types/Comments';
import { User } from './types/Users';

const preparedPosts: Post[] = posts.map(post => ({
  ...post,
  comment: comments.filter((comment: Comment) => comment.postId
  === post.id) || null,
  user: users.find((user: User) => post.userId === user.id) || null,
}));

const App: React.FC = () => (
  <div className="app">
    <h1 className="app__title">Static list of posts</h1>
    <PostsList posts={preparedPosts} />
  </div>
);

export default App;
