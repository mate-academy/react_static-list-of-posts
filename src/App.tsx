import React from 'react';

import './App.scss';
import { PostList } from './components/PostList';
import { Post } from './types/post';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
import { Comment } from './types/comments';
import { User } from './types/User';

const getPostComments = (postId: number): Comment[] => {
  const foundComments = commentsFromServer.filter(com => com.postId === postId);

  return foundComments;
};

const getPostUser = (userId: number): User => {
  const foundUser = usersFromServer.find(user => user.id === userId)!;

  return foundUser;
};

const postsList: Post[] = postsFromServer.map(post => ({
  ...post,
  user: getPostUser(post.userId),
  comments: getPostComments(post.id) || [],
}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList postsList={postsList} />
  </section>
);
