import React from 'react';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
import { PostList } from './components/PostList';

import { Post } from './types/Post';
import { User } from './types/User';
import { Comment } from './types/Comment';

const getUser = (userId: number): User | null => (
  usersFromServer.find(user => user.id === userId) || null
);

const getComments = (id: number): Comment[] => (
  commentsFromServer.filter(comment => comment.postId === id)
);

const posts: Post[] = postsFromServer.map(post => ({
  ...post,
  user: getUser(post.userId),
  comments: getComments(post.id),
}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={posts} />
  </section>
);
