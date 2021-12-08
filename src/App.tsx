import React from 'react';

import { PostList } from './components/PostList/PostList';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import { Post } from './types/Post';

const preparedPosts: Post[] = posts.map((post) => ({
  ...post,

  comments: comments.filter((comment) => (
    comment.postId === post.userId
  )),

  user: users.find((user) => (
    post.userId === user.id
  )) || null,
}));

const App: React.FC = () => {
  return (
    <div className="app">
      <h1 className="app__title">Static list of posts</h1>
      <PostList preparedPosts={preparedPosts} />
    </div>
  );
};

export default App;
