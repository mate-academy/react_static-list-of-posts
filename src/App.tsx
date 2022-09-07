import React from 'react';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
import { Comments } from './types/Comments';
import { User } from './types/Users';
import { Posts } from './types/Posts';
import { PostList } from './components/PostList';

const getComments: (postId: number) => Comments[] = postId => commentsFromServer
  .filter(comment => comment.postId === postId);

function getUser(userId: number): User | null {
  const postUser = usersFromServer.find(user => user.id === userId);

  return postUser || null;
}

const posts: Posts[] = postsFromServer.map(post => ({
  ...post,
  comments: getComments(post.id),
  user: getUser(post.userId),
}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts} />
  </section>
);
