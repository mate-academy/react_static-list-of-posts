import React from 'react';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
import { User } from './types/user';
import { Comment } from './types/comment';
import { Post } from './types/post';
import { PostList } from './components/PostList';

function getUserInfo(userId: number): User | null {
  const userInfo = usersFromServer.find(user => user.id === userId);

  return userInfo || null;
}

function getCommentsList(postId: number): Comment[] | [] {
  return commentsFromServer
    .filter(comment => comment.postId === postId);
}

const posts: Post[] = postsFromServer.map(post => ({
  ...post,
  user: getUserInfo(post.userId),
  comments: getCommentsList(post.id),
}));

// eslint-disable-next-line no-console
console.log('posts:', posts);

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={posts} />
  </section>
);
