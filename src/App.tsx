import React from 'react';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import { PostList } from './components/PostList';
import { ReadyPost, User } from './Types';

const preparedPosts:ReadyPost[] = posts.map((post) => ({
  ...post,
  user: users.find((user: User) => user.id === post.userId) || null,
  comments: comments.filter((comment) => comment.postId === post.id),
}));

const App: React.FC = () => (
  <div className="posts">
    <PostList posts={preparedPosts}/>
  </div>
);

export default App;
