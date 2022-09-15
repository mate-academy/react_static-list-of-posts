/* eslint-disable max-len */
import React from 'react';
import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

import { PostList } from './components/PostList';

import { Comment } from './types/Comment';
import { User } from './types/User';
import { Post } from './types/Post';

function getCommentsById(postId: number):Comment[] {
  return commentsFromServer.filter(comment => (postId === comment.postId));
}

function getUsersById(userId: number):User | null {
  return usersFromServer.find(user => (userId === user.id)) || null;
}

const posts: Post[] = postsFromServer.map((post) => {
  return {
    ...post,
    comments: getCommentsById(post.id),
    user: getUsersById(post.userId),
  };
});

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts} />
  </section>
);
