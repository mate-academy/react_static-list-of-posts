import React from 'react';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

import { PostList } from './components/PostList/PostList';

import {
  Comment,
  Post,
  PreparedPosts,
  User,
} from './react-app-env';

const makingArray = (
  postsIncome: Post[],
  commentsIncome: Comment[],
  usersIncome: User[],
): PreparedPosts[] => (
  postsIncome.map(post => ({
    ...post,
    user: usersIncome.find(user => post.userId === user.id) || null,
    comments: commentsIncome
      .filter(comment => post.id === comment.postId) || null,
  }))
);

const preparedPosts = makingArray(posts, comments, users);

const App: React.FC = () => (
  <div className="App">
    <h1>Static list of posts</h1>

    <PostList preparedPosts={preparedPosts} />
  </div>
);

export default App;
