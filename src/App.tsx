import React from 'react';

import './App.scss';
import { PostList } from './components/PostList';

import { User } from './types/User';
import { Comment } from './types/Comment';
import { Post } from './types/Post';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

const postFromApi = postsFromServer;
const commentsFromApi = commentsFromServer;
const usersFromApi = usersFromServer;

function getUserById(userId: number): User | null {
  return usersFromApi.find(user => user.id === userId) || null;
}

function getCommentsById(postId: number) : Comment[] {
  return commentsFromApi.filter((comment) => comment.postId === postId);
}

export const posts: Post[] = postFromApi.map(post => ({
  ...post,
  user: getUserById(post.userId),
  comments: getCommentsById(post.id),
}));

export const App: React.FC = () => {
  return (
    <section className="App">
      <h1 className="App__title">Static list of posts</h1>
      <PostList posts={posts} />
    </section>
  );
};
