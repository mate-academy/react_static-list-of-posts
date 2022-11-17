import React from 'react';
import './App.scss';

import { PostList } from './components/PostList';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

import { Post } from './types/Post';
import { User } from './types/User';
import { Comment } from './types/Comment';

function getUserById(userId: number): User | null {
  const userInPost = usersFromServer
    .find(user => user.id === userId);

  return userInPost || null;
}

function getCommentsById(postID: number): Comment[] {
  const commentsInPost = commentsFromServer
    .filter(comment => comment.postId === postID);

  return commentsInPost;
}

export const posts: Post[] = postsFromServer.map(post => ({
  ...post,
  user: getUserById(post.userId),
  comments: getCommentsById(post.id),
}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts} />
  </section>
);
