import React from 'react';
import './App.scss';

import postsFromServer from './api/posts';
import usersFromServer from './api/users';
import commentsFromServer from './api/comments';

import { User } from './types/User';
import { Comment } from './types/Comment';
import { Post } from './types/Post';

import { PostList } from './components/PostList/PostList';

function getUserById(userId: number): User | null {
  return usersFromServer.find(user => userId === user.id) || null;
}

function getCommentsByPostId(postId: number): Comment[] {
  return commentsFromServer.filter(comment => (
    postId === comment.postId
  ));
}

const posts: Post[] = postsFromServer.map(post => (
  {
    ...post,
    user: getUserById(post.userId),
    comments: getCommentsByPostId(post.id),
  }
));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={posts} />
  </section>
);
