import React from 'react';
import { PostList } from './components/PostList';
import { PostWithComment } from './types/postWithComment';
import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

function getUserById(userId: number) {
  return usersFromServer.find(user => user.id === userId) || null;
}

function getCommentById(postId: number) {
  return commentsFromServer.filter(comment => comment.postId === postId);
}

const posts: PostWithComment[] = postsFromServer.map(post => ({
  ...post,
  user: getUserById(post.userId),
  comment: getCommentById(post.id),
}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={posts} />
  </section>
);
