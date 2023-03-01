import React from 'react';
import { User } from './types/User';
import { Post } from './types/Post';
import { Comment } from './types/Comment';
import { PostList } from './components/PostList';
import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

function getUser(userId: number): User | null {
  const foundUser = usersFromServer.find(user => user.id === userId);

  return foundUser || null;
}

function getComment(id: number): Comment[] {
  const foundComment = commentsFromServer.filter(comment => {
    return comment.postId === id;
  });

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
