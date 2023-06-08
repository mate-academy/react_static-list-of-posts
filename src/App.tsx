import React from 'react';

import './App.scss';
import { PostList } from './components/PostList';
import { Comment } from './types/Comment';
import { Post } from './types/Post';
import { User } from './types/User';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

function getComment(id: number): Comment[] | null {
  const foundCommentsArray
    = commentsFromServer.filter(comment => comment.postId === id);

  return foundCommentsArray || null;
}

export const users: User[] = usersFromServer.map(user => ({
  ...user,
}));

export const posts: Post[] = postsFromServer.map((post) => ({
  ...post,
  comments: getComment(post.id),
  user: users.find((user) => user.id === post.userId) || null,
}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={posts} />
  </section>
);
