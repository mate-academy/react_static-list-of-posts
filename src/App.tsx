import React from 'react';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

import { PostList } from './components/PostList/PostList';

import { User } from './types/User';
import { Comment } from './types/Comment';
import { Post } from './types/Post';

function getUser(userId: number): User | null {
  return usersFromServer.find(user => user.id === userId) || null;
}

function getComment(id: number): Comment[] {
  return commentsFromServer.filter(comment => (comment.postId === id));
}

const posts: Post[] = postsFromServer.map(
  (post) => (
    {
      ...post,
      user: getUser(post.userId),
      // eslint-disable-next-line max-len
      comments: getComment(post.id),
    }
  ),
);

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts} />
  </section>
);
