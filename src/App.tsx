/* eslint-disable import/no-cycle */
import React from 'react';
import { User } from './components/UserInfo/UserInfo';
import { PostList } from './components/PostList/PostList';
import { Comment } from './components/CommentInfo/CommentInfo';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
// import posts from './api/posts';
// import comments from './api/comments';
// import users from './api/users';

interface Post {
  userId: number,
  id: number,
  title: string,
  body: string,
}

export type PreparedPosts = Post & {
  user: User | undefined,
  comments: Comment []
};

const preparedPosts: PreparedPosts [] = posts.map(item => {
  const postComments = comments.filter(el => el.postId === item.id);
  const thisUser = users.find(el => item.userId === el.id);

  return { ...item, user: thisUser, comments: postComments };
});

const App: React.FC = () => (
  <div className="App">
    <h1>Static list of posts</h1>
    <PostList props={preparedPosts} />
  </div>
);

export default App;
