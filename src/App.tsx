import React from 'react';
import { PostList } from './components/PostList';
import { User } from './types/User';
import { Comment } from './types/Comment';

import './App.scss';
import './components/PostInfo/PostInfo.scss';
import './components/UserInfo/UserInfo.scss';
import './components/CommentList/CommentList.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

function getUserById(userId: number): User | null {
  return usersFromServer.find(user => user.id === userId) || null;
}

function getCommentsByPostId(postId: number): Comment[] {
  return commentsFromServer.filter(comment => comment.postId === postId);
}

const posts = postsFromServer.map(post => ({
  ...post,
  user: getUserById(post.userId),
  comments: getCommentsByPostId(post.id),
}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={posts} />
  </section>
);
