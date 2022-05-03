import React from 'react';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import {
  Comment,
  User,
  PreparedPost,
  Post,
} from './types/types';
import { PostList } from './components/PostList';

const preparedPosts: PreparedPost[] = posts.map((item: Post) => (
  {
    ...item,
    user: users.find((person: User) => (item.userId === person.id)) || null,
    comments: comments.filter((comment: Comment) => (
      item.id === comment.postId
    )),
  }
));

const App: React.FC = () => (
  <div className="app">
    <h1 className="app__header">Static list of posts</h1>
    <PostList postList={preparedPosts} />
  </div>
);

export default App;
