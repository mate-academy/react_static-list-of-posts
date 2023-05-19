import React from 'react';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
import { Post } from './types/Post';
import { PostList } from './components/PostList';
import { User } from './types/User';
import { Comment } from './types/Comment';

const getUserById = (id: number): User | null => {
  const foundUser = usersFromServer.find(user => user.id === id);

  return foundUser || null;
};

const getCommentId = (id: number): Comment[] => {
  const coments
    = commentsFromServer.filter((comment) => (comment.postId === id));

  return coments;
};

const Posts: Post[] = postsFromServer.map((post) => ({
  ...post,
  user: getUserById(post.userId),
  comments: getCommentId(post.id),
}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={Posts} />
  </section>
);
