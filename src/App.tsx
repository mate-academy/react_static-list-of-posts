import React from 'react';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

import { PostList } from './components/PostList';

import { PostListType } from './types/PostListType';
import { User } from './types/User';
import { Comment } from './types/Comment';
import { Post } from './types/Post';

const postsInfo: PostListType[] = postsFromServer
  .map((el: Post): PostListType => {
    const resObj: PostListType = {
      ...el,
      user: null,
      comments: [],
    };

    usersFromServer.forEach((userEl: User): void => {
      if (userEl.id === resObj.userId) {
        resObj.user = userEl;
      }
    });

    commentsFromServer.forEach((commentsEl: Comment): void => {
      if (commentsEl.postId === resObj.id) {
        resObj.comments.push(commentsEl);
      }
    });

    return resObj;
  });

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={postsInfo} />
  </section>
);
