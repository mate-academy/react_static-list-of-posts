import React from 'react';

import { PostList } from './components/PostList/PostList';
import './App.scss';

import postsFrom from './api/posts';
import commentsFrom from './api/comments';
import usersFrom from './api/users';

import {
  Post,
  User,
  Comment,
  PreparedPost,
} from './react-app-env';

const preparePost = (
  posts: Post[],
  users: User[],
  comments: Comment[],
): PreparedPost[] => {
  return posts.map(post => ({
    ...post,
    user: users.find(user => user.id === post.userId) || null,
    comments: comments.filter(comment => comment.postId === post.id),
  }));
};

const preparedPost = preparePost(postsFrom, usersFrom, commentsFrom);

const App: React.FC = () => (
  <div className="App">
    <h1>Static list of posts</h1>
    <PostList preparedPost={preparedPost} />
  </div>
);

export default App;
