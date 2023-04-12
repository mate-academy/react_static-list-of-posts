import React from 'react';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

import { Post } from './types/Post';
import { Users } from './types/Users';
import { Comment } from './types/Comment';
import { PostList } from './components/PostList';

function getUser(userId: number): Users | null {
  const userName = usersFromServer.find((user) => user.id === userId) || null;

  return userName || null;
}

function getComments(postId: number): Comment[] {
  const commentsBody = commentsFromServer
    .filter((comment) => {
      return comment.postId === postId;
    });

  return commentsBody;
}

export const App: React.FC = () => {
  const posts: Post[] = postsFromServer.map((post) => ({
    ...post,
    user: getUser(post.userId),
    comments: getComments(post.id),
  }
  ));

  return (
    <section className="App">
      <h1 className="App__title">Static list of posts</h1>
      <PostList posts={posts} />
    </section>
  );
};
