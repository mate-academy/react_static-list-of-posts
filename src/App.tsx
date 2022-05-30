/* eslint-disable object-curly-newline */
import React from 'react';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import { Comments, Posts, PreparedPosts, Users } from './react-app-env';
import { PostList } from './components/PostList/PostList';

const preparedPosts = (
  postss: Posts[],
  commentss: Comments[],
  userss: Users[],
):PreparedPosts[] => {
  return postss.map(post => ({
    ...post,
    user: userss.find(user => user.id === post.userId),
    comments: commentss.filter(comment => comment.postId === post.id),
  }));
};

const postsPrepared = preparedPosts(posts, comments, users);

const App: React.FC = () => (
  <div className="App">
    <h1>Static list of posts</h1>
    <PostList postsPrepared={postsPrepared} />
  </div>
);

export default App;
