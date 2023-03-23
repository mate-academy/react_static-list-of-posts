import React from 'react';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

import { User } from './types/User';
import { Post } from './types/Post';
import { Comments } from './types/Comments';

import { PostList } from './components/PostList';

function getUsersById(userId: number): User | null {
  const foundUser = usersFromServer.find(user => user.id === userId);

  return foundUser || null;
}

function getCommentsById(id: number): Comments[] {
  return commentsFromServer.filter(comment => (
    comment.postId === id
  ));
}

export const posts: Post[] = postsFromServer.map(post => {
  const { userId, id } = post;

  return {
    ...post,
    user: getUsersById(userId),
    comments: getCommentsById(id),
  };
});

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={posts} />
  </section>
);
