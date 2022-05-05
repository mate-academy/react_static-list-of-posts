import React from 'react';
import './App.scss';
import {
  Post,
  Comments,
  User,
  PreparedPost,
} from './types/interfaces';
import { PostList } from './components/PostList';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

const preparedPosts: PreparedPost[] = posts.map((post: Post) => (
  {
    ...post,
    user: users.find((user: User) => (post.userId === user.id)) || null,
    comments: comments.filter((com: Comments) => (com.postId === post.id)),
  }
));

const App: React.FC = () => (
  <div className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList postList={preparedPosts} />
  </div>
);

export default App;
