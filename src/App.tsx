import React from 'react';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

import { PostList } from './components/PostList';

import { Post } from './type/Post';
import { Comments } from './type/Comments';
import { User } from './type/User';

function getUser(userId: number): User | null {
  const foundedUser = usersFromServer.find(user => (user.id === userId));

  return foundedUser || null;
}

function getComment(postId: number): Comments[] | null {
  const foundedComment = commentsFromServer.filter(comment => (
    comment.postId === postId));

  return foundedComment.length ? foundedComment : null;
}

export const posts: Post[] = postsFromServer.map(post => ({
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
