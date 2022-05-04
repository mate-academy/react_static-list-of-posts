import React from 'react';

import {
  Comment,
  Post,
  PreparedPost,
  User,
} from './types/types';

import './App.scss';

import incomingPosts from './api/posts';
import incomingComments from './api/comments';
import incomingUsers from './api/users';
import { PostList } from './components/PostList/PostList';

const getPreparedPost = (posts: Post[], users: User[], comments: Comment[]): PreparedPost[] => {
  return posts.map((post) => ({
    ...post,
    user: users.find((user) => user.id === post.userId || null),
    comments: comments.filter((comment) => comment.postId === post.id),
  }));
};

const preparedPost = getPreparedPost(incomingPosts, incomingUsers, incomingComments);

const App: React.FC = () => (
  <div className="App">
    <PostList posts={preparedPost} />
  </div>
);

export default App;
