import React from 'react';

import './App.scss';
import './components/CommentList/CommentList.scss';
import './components/PostInfo/PostInfo.scss';
import './components/UserInfo/UserInfo.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

import { User } from './types/User';
import { Post } from './types/Post';
import { Comment } from './types/Comment';
import { PostList } from './components/PostList';

function getUserById(userId: number): User | null {
  const foundUser = usersFromServer.find(user => user.id === userId);

  return foundUser || null;
}

function getCommentPostId(commentId: number): Comment[] {
  const foundComment = commentsFromServer
    .filter(comment => comment.postId === commentId);

  return foundComment;
}

export const posts: Post[] = postsFromServer.map(post => ({
  ...post,
  user: getUserById(post.userId),
  comments: getCommentPostId(post.id),
}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts} />
  </section>
);
