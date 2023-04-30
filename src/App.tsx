import React from 'react';

import './App.scss';

import { PostList } from './components/PostList';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

import { Post } from './type/post';
import { Comment } from './type/comment';
import { User } from './type/user';

function findUserById(userId:number): User | null {
  const foundUser = usersFromServer.find(user => user.id === userId);

  return foundUser || null;
}

function findCommentsById(id: number): Comment[] | [] {
  const comments = commentsFromServer.filter(comment => comment.postId === id);

  return comments.length > 0 ? comments : [];
}

const allPosts: Post[] = postsFromServer.map(post => ({
  ...post,
  user: findUserById(post.userId),
  comments: findCommentsById(post.id),
}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={allPosts} />
  </section>
);
