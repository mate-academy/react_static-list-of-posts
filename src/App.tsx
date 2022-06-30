import React from 'react';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import { PostWithUserAndComments } from './types/typesdef';
import { PostList } from './componets/PostList/PostList';

const preparedPosts: PostWithUserAndComments[] = posts.map(post => {
  return {
    ...post,
    author: users.find(user => user.id === post.userId) || null,
    comments: comments.filter(comment => comment.postId === post.id),
  };
});

const App: React.FC = () => (
  <div className="App">
    <h1>Static list of posts</h1>
    <PostList posts={preparedPosts} />
  </div>
);

export default App;
