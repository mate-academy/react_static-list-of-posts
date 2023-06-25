import React from 'react';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
import { User } from './types/User';
import { Post } from './types/Post';
import { Comment } from './types/Comment';
import { PostList } from './components/PostList';

function getUserInfo(userID: number): User {
  const foundUser = usersFromServer.find(user => user.id === userID);

  if (foundUser) {
    return foundUser;
  }

  throw new Error('User was not found');
}

function getCommentsToPost(postId: number): Comment[] | [] {
  const foundComments = commentsFromServer
    .filter(comm => comm.postId === postId);

  return foundComments;
}

const postsArr: Post[] = postsFromServer
  .map((post) => {
    return {
      ...post,
      user: getUserInfo(post.userId),
      comments: getCommentsToPost(post.id),
    };
  });

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={postsArr} />
  </section>
);
