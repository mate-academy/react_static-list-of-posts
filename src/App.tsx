import React from 'react';
import { User } from './types/User';
import { Comment } from './types/Coment';
import { Post } from './types/Post';
import { PostList } from './components/PostList';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

function getUserById(UserId: number): User | null {
  return usersFromServer.find((user) => UserId === user.id) || null;
}

function getCommentsByPostId(postId: number): Comment[] {
  return commentsFromServer.filter((comment) => comment.postId === postId);
}

const posts: Post[] = postsFromServer.map((post) => ({
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
