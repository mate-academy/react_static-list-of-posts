import React from 'react';
import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
import { Comment } from './types/Comment';
import { User } from './types/User';
import { Post } from './types/Post';
import { PostList } from './components/PostList';

const getUserById = (userId: number): User | null => {
  const gotUser = usersFromServer.find(user => user.id === userId);

  return gotUser || null;
};

const getCommentById = (commentId: number): Comment[] => {
  return commentsFromServer.filter(
    comment => comment.postId === commentId,
  );
};

const allPosts: Post[] = postsFromServer.map(post => ({
  ...post,
  user: getUserById(post.userId),
  comments: getCommentById(post.id),
}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={allPosts} />
  </section>
);
