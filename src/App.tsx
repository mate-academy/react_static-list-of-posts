import React from 'react';
import { PostList } from './components/PostList';
import { User } from './components/types/User';
import { Comment } from './components/types/Comment';
import { Post } from './components/types/Post';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

function getUserById(userId: number): User | null {
  return usersFromServer.find(user => user.id === userId) || null;
}

function getCommentsById(commentId: number): Comment[] {
  return commentsFromServer.filter(comment => (
    commentId === comment.postId
  ));
}

const posts: Post[] = postsFromServer.map(post => ({
  ...post,
  user: getUserById(post.userId),
  comments: getCommentsById(post.id),
}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={posts} />
  </section>
);
