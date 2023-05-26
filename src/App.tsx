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

  function findUsers(id: number): User[] {
    return usersFromServer.filter((user) => user.id === id);
  }

  function findComments(idPost: number): Comment[] | null {
    const a = commentsFromServer.filter((comment) => comment.postId === idPost);

    if (a.length) {
      return a;
    }

    return null;
  }

  for (let i = 0; i < postsFromServer.length; i += 1) {
    totalPosts.push({
      user: findUsers(postsFromServer[i].userId)[0],
      postId: postsFromServer[i].id,
      title: postsFromServer[i].title,
      body: postsFromServer[i].body,
      commentsList: findComments(postsFromServer[i].id),
    });
  }

  return totalPosts;
};

const postList = separatedEachPostDepensies();

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={postList} />
  </section>
);
