import React from 'react';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
import { Comment } from './types/Comment';
import { User } from './types/User';
import { Post } from './types/Post';
import { PostList } from './components/PostList';

const getCommentsById: (postId: number) =>
Comment[] = postId => commentsFromServer
  .filter(comment => comment.postId === postId);

function getUserById(userId: number): User | null {
  const postUser = usersFromServer.find(user => user.id === userId);

  return postUser || null;
}

const posts: Post[] = postsFromServer.map(post => ({
  ...post,
  comments: getCommentsById(post.id),
  user: getUserById(post.userId),
}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts} />
  </section>
);
