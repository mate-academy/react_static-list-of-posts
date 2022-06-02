import React from 'react';
import { PostList } from './components/PostList/PostList';
import {
  PreparedPost,
  Post,
} from './react-app-env';
import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

const preparedPost: PreparedPost[] = posts.map((post: Post) => (
  {
    ...post,
    comments: comments.filter(comment => comment.postId === post.id),
    user: users.find(user => user.id === post.userId) || null,
  }
));

const App: React.FC = () => (
  <div className="App">
    <h1 className="title is-1">Static list of posts</h1>
    <PostList preparedPost={preparedPost} />
  </div>
);

export default App;
