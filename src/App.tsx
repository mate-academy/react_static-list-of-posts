import React from 'react';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
import { PostList } from './components/PostList';

import { Comment } from './components/types/Comment';
import { User } from './components/types/User';
import { Post } from './components/types/Post';

function getComments(postId: number): Comment[] | null {
  const foundComment =  commentsFromServer
    .filter((comment) => comment.postId === postId);

  return foundComment.length > 0 ? foundComment : null;
}

function getUser(id: number): User | null {
  const foundUser =  usersFromServer.find((user) => user.id === id);

  return foundUser || null
}

export const posts: Post[] = postsFromServer.map(post => ({
  ...post,
  comments: getComments(post.id),
  user: getUser(post.userId),
}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts}/>
  </section>
);
