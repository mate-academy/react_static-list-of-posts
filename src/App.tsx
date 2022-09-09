import React from 'react';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

import { PostList } from './components/PostList';
import { Comment } from './types/Comments';
import { Posts } from './types/Posts';
import { User } from './types/Users';

function commentsId(postId: number): Comment[] {
  return commentsFromServer.filter(comment => (comment.postId === postId));
}

function getUser(userId: number): User | null {
  const postUser = usersFromServer.find(person => person.id === userId);

  return postUser || null;
}

const posts: Posts[] = postsFromServer.map((post) => {
  const result = {
    ...post,
    comments: commentsId(post.id),
    user: getUser(post.userId),
  };

  return result;
});

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts} />
  </section>
);
