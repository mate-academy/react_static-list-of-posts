import React from 'react';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

import { Post } from './types/post';
import { User } from './types/user';
import { Comment } from './types/comment';
import { PostList } from './components/PostList';

function getUser(userId: number): User | null {
  const foundUser = usersFromServer.find((user) => user.id === userId);

  return foundUser || null;
}

function getComments(id: number): Comment[] | null {
  const foundComments: Comment[] = [];

  commentsFromServer.forEach((comment) => {
    if (comment.postId === id) {
      foundComments.push(comment);
    }
  });

  if (foundComments.length === 0) {
    return null;
  }

  return foundComments || null;
}

export const posts: Post[] = postsFromServer.map((post) => ({
  ...post,
  user: getUser(post.userId),
  comment: getComments(post.id),
}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <div className="PostList">
      {posts.map((post: Post) => (
        <PostList post={post} key={post.id} />
      ))}
    </div>
  </section>
);
