import React from 'react';
import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import { PostList } from './components/PostList';

import './App.scss';

const preparedPosts: Post[] = posts.map(post => ({
  ...post,
  user: users.find(user => user.id === post.userId),
  comments: comments.filter(comment => comment.postId === post.id) as Comment[],
}));

const App: React.FC = () => (
  <div className="App">
    <div className="App__wrapper">
      <h1 className="App__title">Static list of posts</h1>
      <PostList posts={preparedPosts} />
    </div>
  </div>
);

export default App;
