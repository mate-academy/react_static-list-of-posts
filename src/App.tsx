import React from 'react';

import './App.scss';
import { PostList } from './components/PostList';

import { Comment } from './components/types/comment';
import { User } from './components/types/user';
import { Post } from './components/types/post';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

function UserWithId(userId: number): User | null {
  return usersFromServer.find(user => userId === user.id) || null;
}

function getCommentById(commentId: number): Comment[] {
  return commentsFromServer.filter(comment => (
    commentId === comment.postId
  ));
}

const posts: Post[] = postsFromServer.map(post => ({
  ...post,
  user: UserWithId(post.userId),
  comments: getCommentById(post.id),
}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts} />
  </section>
);
