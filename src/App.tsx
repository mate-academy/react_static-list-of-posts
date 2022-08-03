import React from 'react';

import './App.scss';
import { PostList } from './components/PostList';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
import { Posts } from './types/Posts';
import { Users } from './types/Users';
import { Comments } from './types/Comments';

function getUser(userId: number): Users | null {
  const foundUser = usersFromServer.find(user => user.id === userId);

  return foundUser || null;
}

function getComment(id: number): Comments[] {
  const foundComment = commentsFromServer.filter(
    user => user.postId === id,
  );

  return foundComment;
}

const posts: Posts[] = postsFromServer.map(post => ({
  ...post,
  user: getUser(post.userId),
  comments: getComment(post.id),
}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts} />
  </section>
);
