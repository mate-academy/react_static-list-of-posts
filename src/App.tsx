import React from 'react';
import { PostList } from './components/PostList';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import { User, Comment } from './components/interface';

type PreparePost = {
  userId: number,
  id: number,
  title: string,
  body: string,
  autor: User,
  autorComments: Comment[],
};

const preparedPosts: PreparePost[] = posts.map((post) => {
  const userAutoor = users.find((user) => user.id === post.userId);

  if (userAutoor === undefined) {
    throw new Error();
  }

  return {
    ...post,
    autor: userAutoor,
    autorComments: comments.filter((comment) => comment.postId === post.id),
  };
});

const App: React.FC = () => (
  <PostList posts={preparedPosts} />
);

export default App;
