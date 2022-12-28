import React from 'react';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

import { Comment } from './components/types/Comment';
import { User } from './components/types/User';
import { PostList } from './components/PostList';
import { Post } from './components/types/Post';

function getProperUser(userId:number):User | null {
  const user = (usersFromServer.find((person) => (
    person.id === userId
  )));

  return user || null;
}

function getProperComment(postId:number):Comment[] {
  const comments = commentsFromServer.filter(
    (comment) => comment.postId === postId,
  );

  return comments;
}

export const posts:Post[] = postsFromServer.map(post => ({
  ...post,
  user: getProperUser(post.userId),
  comments: getProperComment(post.id),
}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts} />
  </section>
);
