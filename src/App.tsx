import React from 'react';
import './App.scss';

import comments from './api/comments';
import users from './api/users';
import posts from './api/posts';

import { LinkedObject } from './types/types';
import { IComment } from './types/Comment';
import { IPost, IPostRequired } from './types/IPost';
import { IUser } from './types/User';
import { PostList } from './components/PostList';

const getPreparedComments = (commentList: IComment[]): LinkedObject<IComment[]> => {
  const preparedComents: LinkedObject<IComment[]> = {};

  commentList.forEach((comment: IComment) => {
    if (!preparedComents[comment.postId]) {
      preparedComents[comment.postId] = [];
    }

    preparedComents[comment.postId].push(comment);
  });

  return preparedComents;
};

const getPreparedUsers = (userList: IUser[]): LinkedObject<IUser> => {
  const preparedComents: LinkedObject<IUser> = {};

  userList.forEach((user: IUser) => {
    preparedComents[user.id] = user;
  });

  return preparedComents;
};

const getPreparedPosts = (
  postList: IPost[],
  userList: LinkedObject<IUser>,
  commentList: LinkedObject<IComment[]>,
): IPostRequired[] => {
  return postList.map((post: IPost) => (
    {
      ...post,
      user: userList[post.userId],
      comments: commentList[post.id],
    }
  ));
};

const preparedPosts = getPreparedPosts(
  posts,
  getPreparedUsers(users),
  getPreparedComments(comments),
);

const App: React.FC = () => (
  <div className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={preparedPosts} />
  </div>
);

export default App;
