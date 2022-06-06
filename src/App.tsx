import React from 'react';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import { PreparedPost } from './app.typedef';
import { PostList } from './components/PostList';

const preparedPosts: PreparedPost[] = posts.map(post => ({
  ...post,
  user: users.find(user => user.id === post.userId),
  comments: comments.filter(comment => comment.postId === post.id),
}));
const App: React.FC = () => (
  <div className="App">
    <h1>Static list of posts</h1>
    <PostList posts={preparedPosts} />
  </div>
);

export default App;
