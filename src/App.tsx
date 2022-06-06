import React from 'react';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

import { PostList } from './components/PostList';
import {
  PreparedPost,
  Post,
  User,
  Comment,
} from './types';

const preparedPosts: PreparedPost[] = posts.map((post: Post) => ({
  ...post,
  user: users.find((user: User) => user.id === post.userId),
  comments: comments.filter((comment: Comment) => (
    comment.postId === post.id
  )),
}));

const App: React.FC = () => (
  <div className="App">
    <PostList posts={preparedPosts} />
  </div>
);

export default App;
