import React from 'react';

import './App.scss';

import posts from './api/posts';
import users from './api/users';
import comments from './api/comments';
import { PostList } from './components/PostList';
import { Post, Comment } from './types/Types';

const preparedPosts: Post[] = posts.map((post) => ({
  ...post,
  user: users.find((user) => user.id === post.userId) || null,
  comment: comments
    .filter((comment) => comment.postId === post.id) as Comment[],

}));

const App: React.FC = () => (
  <div className="app">
    <h1 className="app__title">
      Static list of posts
    </h1>

    <PostList
      prepPosts={preparedPosts}
      data-cy="post-info"
    />
  </div>
);

export default App;
