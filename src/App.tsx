import React from 'react';

import './App.scss';

import postsFromServer from './api/posts';
import usersFromServer from './api/users';
import commentsFromServer from './api/comments';

import { User } from './types/user';
import { Comment } from './types/comment';
// import { Post } from './types/post';
import { PostList } from './components/PostList';

function getUser(userId: number): User | null {
  return usersFromServer.find(user => userId === user.id) || null;
}

function getCommentsById(id: number): Comment[] {
  return commentsFromServer
    .filter(comment => comment.postId === id);
}

const posts = postsFromServer.map(post => ({
  ...post,
  user: getUser(post.userId),
  comments: getCommentsById(post.id),
}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList
      posts={posts}
    />
  </section>
);
