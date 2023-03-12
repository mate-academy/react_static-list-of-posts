import React from 'react';

import './App.scss';
import { PostList } from './components/PostList';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
import { UserType } from './types/User';
import { ComentType } from './types/ComentType';
import { Post } from './types/Posts';
import { OnePost } from './types/OnePost';

function getUser(users: UserType[], onePost:Post): UserType | null {
  const usersFind = users.find((userOne) => userOne.id === onePost.userId);

  return usersFind || null;
}

function getComents(coments:ComentType[], onePost: Post): ComentType[] | [] {
  return coments.filter(coment => coment.postId === onePost.id);
}

export const upgradePosts: OnePost[] = postsFromServer.map((onePost) => {
  return {
    ...onePost,
    user: getUser(usersFromServer, onePost),
    comments: getComents(commentsFromServer, onePost),
  };
});

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={upgradePosts} />
  </section>
);
