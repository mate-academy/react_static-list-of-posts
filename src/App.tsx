import React from 'react';

import './App.scss';
import { PostList } from './components/PostList';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
import { Post } from './types/Post';

function getUserFromServer(userId: number) {
  return usersFromServer.find(user => user.id === userId);
}

function getCommentsFromServer(postId: number) {
  return commentsFromServer.filter(comment => comment.postId === postId);
}

const posts: Post[] = postsFromServer.map(post => ({
  ...post,
  user: getUserFromServer(post.userId) || null,
  comments: getCommentsFromServer(post.id),
}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts} />
  </section>
);
