import React from 'react';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

import { User } from './types/User';
import { Post } from './types/Post';
import { Comment } from './types/Comment';
import { PostList } from './components/PostList';

function findUserById(userId: number): User | null {
  const user = usersFromServer.find(
    userFromServer => userFromServer.id === userId,
  );

  return user || null;
}

function findCommentsByPostId(postId: number): Comment[] {
  return commentsFromServer.filter(
    (comment: Comment) => comment.postId === postId,
  );
}

const posts = postsFromServer.map<Post>((post) => (
  {
    ...post,
    user: findUserById(post.userId),
    comments: findCommentsByPostId(post.id),
  }
));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={posts} />

  </section>
);
