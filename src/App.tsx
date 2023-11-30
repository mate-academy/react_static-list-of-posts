import { FC } from 'react';
import { PostList } from './components/PostList';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

import { User, Comment } from './types';

function getUserById(userId: number): User | null {
  return usersFromServer.find(user => user.id === userId) || null;
}

function getCommentsById(postId: number): Comment[] {
  return commentsFromServer.filter(comment => (
    comment.postId === postId
  ));
}

const posts = postsFromServer
  .map(post => (
    {
      ...post,
      user: getUserById(post.userId),
      comments: getCommentsById(post.id),
    }
  ));

export const App: FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList
      posts={posts}
    />
  </section>
);
