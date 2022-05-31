import React from 'react';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

import { PostList } from './components/PostList/PostList';

import {
  User,
  Post,
  Comment,
  FullPost,
} from './react-app-env';

const collectData = (
  posts: Post[],
  users: User[],
  comments: Comment[],
): FullPost[] => (
  posts.map(post => ({
    ...post,
    user: users.find(user => user.id === post.userId),
    comment: comments.filter(comment => comment.postId === post.id),
  }))
);

const preparedPosts = collectData(
  postsFromServer,
  usersFromServer,
  commentsFromServer,
);

const App: React.FC = () => (
  <div className="app">
    <PostList listOfPosts={preparedPosts} />
  </div>
);

export default App;
