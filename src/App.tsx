import React from 'react';
import { Comment } from './components/types/Comments';
import { PostList } from './components/PostList';
import { Post } from './components/types/Post';
import { User } from './components/types/User';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

function getUser(userId: number): User | null {
  return usersFromServer.find(user => (user.id === userId)) || null;
}

const getComments: (postId: number) => Comment[] = postId => commentsFromServer
  .filter(comment => comment.postId === postId);

const posts: Post[] = postsFromServer.map(post => ({
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
