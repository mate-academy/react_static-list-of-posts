import React from 'react';

import './App.scss';

import postsFromServer from './api/posts';
import usersFromServer from './api/users';
import { User } from './types/User';
import { PostList } from './components/PostList';
import { Post } from './types/Post';
import { Comment } from './types/Comment';
import comments from './api/comments';

function getUser(userId: number): User | null {
  const findUser = usersFromServer.find((user) => user.id === userId);

  return findUser || null;
}

function getComments(postId: number): Comment[] {
  const findComment = comments.filter((comment) => comment.postId === postId);

  return findComment;
}

export const posts: Post[] = postsFromServer.map((post) => ({
  ...post,

  user: getUser(post.userId),
  comments: getComments(post.id),
}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList
      posts={posts}
    />
  </section>
);
