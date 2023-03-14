import React from 'react';
import { User } from './types/User';
import { Comment } from './types/Comment';
import { Post } from './types/Post';
import { PostList } from './components/PostList';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

const getUserById = (userId: number): User | null => {
  const foundUser = usersFromServer.find(user => user.id === userId);

  return foundUser || null;
};

const getCommentsByPostId = (postId: number): Comment[] => {
  return commentsFromServer.filter(comment => (
    comment.postId === postId
  ));
};

const posts: Post[] = postsFromServer.map(post => {
  const { userId, id } = post;

  return {
    ...post,
    user: getUserById(userId),
    comments: getCommentsByPostId(id),
  };
});

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={posts} />
  </section>
);
