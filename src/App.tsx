import React from 'react';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
import {
  Comment,
  Post,
  User,
} from './react-app-env';
import { PostList } from './components/PostList/PostList';

const preparePosts = (
  comments: Comment[],
  users: User[],
  posts: Post[],
) => {
  return posts.map(post => ({
    ...post,
    user: users.find(user => post.userId === user.id) || null,
    comments: comments
      .filter(comment => post.id === comment.postId) || null,
  }));
};

const posts = preparePosts(
  commentsFromServer,
  usersFromServer,
  postsFromServer,
);

const App: React.FC = () => (
  <div className="App">
    <PostList preparedPosts={posts} />
  </div>
);

export default App;
