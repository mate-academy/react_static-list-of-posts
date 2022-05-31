import React from 'react';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
import {
  Post,
  Comment,
  User,
  PreparedPosts,
} from './react-app-env';

import { PostList } from './components/PostList/PostList';

const prepare = (
  posts: Post[],
  comments: Comment[],
  users: User[],
): PreparedPosts[] => {
  return posts.map(post => ({
    ...post,
    user: users.find(user => post.userId === user.id),
    comments: comments.filter(comment => post.id === comment.postId)
    || 'No Comments',
  }));
};

const preparedPosts = prepare(
  postsFromServer,
  commentsFromServer,
  usersFromServer,
);

const App: React.FC = () => (
  <div className="App">
    <h1>Static list of posts</h1>
    <PostList posts={preparedPosts} />
  </div>
);

export default App;
