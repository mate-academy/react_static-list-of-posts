import React from 'react';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
import {
  Post,
  User,
  Comment,
  PreparedPost,
} from './react-app-env';
import { PostList } from './components/PostList/PostList';

const getPreparedPosts = (
  posts: Post[],
  users: User[],
  comments: Comment[],
): PreparedPost[] => {
  return posts.map(post => (
    {
      ...post,
      user: users.find(user => post.userId === user.id) || null,
      comment: comments.filter(comment => post.id === comment.postId),
    }
  ));
};

const preparedPosts = getPreparedPosts(
  postsFromServer,
  usersFromServer,
  commentsFromServer,
);

const App: React.FC = () => (
  <div className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList preparedPosts={preparedPosts} />
  </div>
);

export default App;
