import React from 'react';

import './App.scss';
import { Post } from './types/Post';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
import { PostList } from './components/PostList';

const getUser = (userId: number) => (
  usersFromServer.find(user => user.id === userId) || null
);

const getComments = (postId: number) => (
  commentsFromServer.filter(comment => comment.postId === postId)
);

const allPosts: Post[] = postsFromServer.map(post => ({
  ...post,
  user: getUser(post.userId),
  comments: getComments(post.id),
}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={allPosts} />
  </section>
);
