import React from 'react';

import './App.scss';

import { PostList } from './components/PostList';
import { Post } from './types/Post';
import { Comment } from './types/Comment';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

function getComments(postId: number): Comment[] {
  return commentsFromServer.filter(comment => (
    comment.postId === postId
  ));
}

const posts: Post[] = postsFromServer.map(post => ({
  ...post,
  comments: getComments(post.id),
  user: usersFromServer.find(user => user.id === post.userId) || null,
}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={posts} />
  </section>
);
