import React from 'react';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
import { UserPost } from './types/UserPost';
import { User } from './types/User';
import { Comment } from './types/Comment';
import { PostList } from './components/PostList/PostList';

const separatedEachPostDepensies = (): UserPost[] => {
  const totalPosts = [];

  function findUserById(id:number): User {
    return usersFromServer.find(user => user.id === id) as User;
  }

  function findComments(idPost: number): Comment[] | null {
    const a = commentsFromServer.filter((comment) => comment.postId === idPost);

    if (a.length) {
      return a;
    }

    return null;
  }

  return postsFromServer.map(postFromServer => ({
      user: findUserById(postFromServer.userId),
      postId: postFromServer.id,
      title: postFromServer.title,
      body: postFromServer.body,
      commentsList: findComments(postFromServer.id)
  }))

  return totalPosts;
};

const postList = separatedEachPostDepensies();

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={postList} />
  </section>
);
