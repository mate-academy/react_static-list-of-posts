import React from 'react';
import {
  Post, Comment, User,
} from './type';
import { PostList } from './components/PostList/PostList';

import './App.scss';

import postsFrom from './api/posts';
import commentsFrom from './api/comments';
import usersFrom from './api/users';

const preparePost = (posts: Post[], comms: Comment[], users: User[]) => {
  return posts.map(post => ({
    ...post,
    user: users.find(us => us.id === post.userId),
    comments: comms.filter(com => com.postId === post.id),
  }));
};

const preparedPosts = preparePost(postsFrom, commentsFrom, usersFrom);

const App: React.FC = () => (
  <div className="app">
    <h1 className="header">Static list of posts</h1>
    <ul className="list">
      <PostList prepared={preparedPosts} />
    </ul>
  </div>
);

export default App;
