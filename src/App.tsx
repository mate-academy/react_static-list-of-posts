import React from 'react';

import './App.scss';
import { User } from './types/user';
import { Post } from './types/post';
import { Comment } from './types/comment';
import { PostList } from './components/PostList';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
// import { post } from 'cypress/types/jquery';

function getUser(userId: number): User | null {
  const foundUser = usersFromServer.find(user => user.id === userId);

  return foundUser || null;
}

function getComments(id: number): Comment[] {
  const foundComments = [...commentsFromServer]
    .filter(comment => comment.postId === id);

  return foundComments;
}

const userPosts: Post[] = postsFromServer.map(userPost => ({
  ...userPost,
  user: getUser(userPost.userId),
  comments: getComments(userPost.id),
}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={userPosts} />
  </section>
);
