import React from 'react';

import './components/UserInfo/UserInfo.scss';
import './components/CommentList/CommentList.scss';
import './components/PostInfo/PostInfo.scss';
import './App.scss';
import { User } from './types/User';
import { Comment } from './types/Comment';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
import { Post } from './types/Post';
import { PostList } from './components/PostList';

function findUserById(userId: number): User | null {
  return usersFromServer.find(user => user.id === userId) || null;
}

function getCommentsByPostId(postId: number): Comment[] {
  const foundComment = commentsFromServer
    .filter(comment => comment.postId === postId);

  return foundComment;
}

const posts: Post[] = postsFromServer.map(post => ({
  ...post,
  user: findUserById(post.userId),
  comments: getCommentsByPostId(post.id),
}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={posts} />

  </section>
);
