import React from 'react';
import { PostList } from './components/PostList';
import { Post } from './types/Post';
import { User } from './types/User';
import { Comment } from './types/Comment';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

const getUserById = (userId: number): User | null => {
  return usersFromServer.find((user) => user.id === userId) || null;
};

const getCommentsById = (postId : number) : Comment[] => commentsFromServer
  .filter(
    (comment) => comment.postId === postId,
  );

const fullPosts = postsFromServer.map((post) => {
  const comments = getCommentsById(post.id);
  const user = getUserById(post.userId);
  const fullPost : Post = { ...post };

  fullPost.comments = comments;

  if (user) {
    fullPost.user = user;
  }

  return fullPost;
});

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={fullPosts} />
  </section>
);
