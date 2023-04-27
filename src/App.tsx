import React from 'react';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
import { User } from './types/User';
import { Comment } from './types/Comment';
import { PostList } from './components/PostList/PostList';
import { Post } from './types/Post';

function getUser(UserId: number): User | null {
  const foundUser = usersFromServer.find(user => user.id === UserId);

  return foundUser || null;
}

function getComment(commentId: number): Comment[] | [] {
  const foundComment = commentsFromServer.filter(
    comment => comment.postId === commentId,
  );

  return foundComment;
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
