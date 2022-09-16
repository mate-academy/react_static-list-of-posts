import React from 'react';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

// import types
import { Post } from './types/Post';
import { Comment } from './types/Comment';
import { PostTodo } from './types/PostTodo';

// import components
import { PostList } from './components/PostList';

// get array of comments if they exist
function getComments(userId: number): Comment[] | [] {
  const foundComments = commentsFromServer
    .filter(comment => comment.postId === userId);

  return foundComments || null;
}

// get post if it exists
function getPost(userId: number): Post | null {
  const foundPost = postsFromServer
    .find(post => post.userId === userId);

  return foundPost || null;
}

// create array of objects with all info
export const todoPost: PostTodo[] = usersFromServer.map(user => ({
  user,
  comment: getComments(user.id),
  post: getPost(user.id),
}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList todoPost={todoPost} />
  </section>
);
