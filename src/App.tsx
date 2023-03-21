import React from 'react';
import './App.scss';

import { PostList } from './components/PostList';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

import { FullPosts } from './types/FullPosts';
import { User } from './types/User';
import { Comment } from './types/Comment';

function getUserById(userId: number): User | null {
  return usersFromServer.find((user) => user.id === userId) || null;
}

const getCommentByPostId = (postId: number): Comment[] => {
  return commentsFromServer.filter(comment => comment.postId === postId);
};

export const posts: FullPosts[] = postsFromServer.map((post) => {
  const { userId, id } = post;

  return {
    ...post,
    user: getUserById(userId),
    comments: getCommentByPostId(id),
  };
});

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={posts} />
  </section>
);
