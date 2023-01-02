import React from 'react';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

import { User } from './types/User';
import { Comment } from './types/Comment';
import { Post } from './types/Post';
import { PostList } from './components/PostList';

function findUserById(userId: number): User | null {
  return usersFromServer.find(user => userId === user.id) || null;
}

function getCommentById(commentId: number): Comment[] {
  return commentsFromServer.filter(comment => commentId === comment.postId);
}

const preparedPosts: Post[] = postsFromServer.map(post => (
  {
    ...post,
    user: findUserById(post.userId),
    comments: getCommentById(post.id),
  }
));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={preparedPosts} />
  </section>
);
