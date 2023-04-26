import React from 'react';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

import { Post } from './types/Post';
import { Users } from './types/Users';
import { Comment } from './types/Comment';
import { PostList } from './components/PostList';

function getUserById(userId: number): Users | null {
  const userName = usersFromServer.find((user) => user.id === userId) || null;

  return userName || null;
}

function getCommentsById(postId: number): Comment[] {
  const commentsBody = commentsFromServer
    .filter((comment) => {
      return comment.postId === postId;
    });

  return commentsBody;
}

export const App: React.FC = () => {
  const posts: Post[] = postsFromServer.map((post) => ({
    ...post,
    user: getUserById(post.userId),
    comments: getCommentsById(post.id),
  }
  ));

  return (
    <section className="App">
      <h1 className="App__title">Static list of posts</h1>
      <PostList posts={posts} />
    </section>
  );
};
