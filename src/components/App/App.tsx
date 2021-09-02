import React from 'react';

import './App.scss';

import posts from '../../api/posts';
import comments from '../../api/comments';
import users from '../../api/users';
import { PostList } from '../PostList/PostList';

const preparedPosts: Post[] = posts.map(post => {
  const relaventUser = users.find(user => user.id === post.userId) || null;
  const relaventComments = comments.filter(comment => post.userId === comment.postId) as Comment[];

  return ({
    ...post,
    user: relaventUser,
    comments: relaventComments,
  });
});

const App: React.FC = () => (
  <div className="App">
    <h1>Static list of posts</h1>
    <PostList posts={preparedPosts} />
  </div>
);

export default App;
