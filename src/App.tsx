import React from 'react';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

import { Post } from './types/Post';
import { User } from './types/User';
import { Comment } from './types/Comment';
import { PostList } from './components/PostList';

function findUser(userId:number):User | null {
  const foundUser = usersFromServer.find(user => user.id === userId);

  return foundUser || null;
}

function findComment(Id:number): Comment[] | [] {
  const foundCommemt = commentsFromServer.filter(comments => (
    comments.postId === Id));

  return foundCommemt;
}

const posts: Post[] = postsFromServer.map((post) => {
  return {
    ...post,
    user: findUser(post.userId),
    comments: findComment(post.id),
  };
});

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={posts} />

  </section>
);
