import React from 'react';

import './App.scss';
import { User } from './components/types/Users';
import { Comments } from './components/types/Comments';
import { Posts } from './components/types/Posts';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

import { PostList } from './components/PostList';

function getUsersById(usersId: number): User | null {
  return usersFromServer.find(user => user.id === usersId) || null;
}

function getCommentsById(idPost: number): Comments[] {
  return commentsFromServer.filter(comment => comment.postId === idPost);
}

const posts: Posts[] = postsFromServer.map(post => ({
  ...post,
  user: getUsersById(post.userId),
  comments: getCommentsById(post.id),
}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={posts} />

  </section>
);
