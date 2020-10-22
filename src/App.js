import React from 'react';
import PostList from './components/PostList/PostList';
import 'bootstrap/dist/css/bootstrap.min.css';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

const postsWithUserAndComments = posts.map(post => ({
  ...post,
  user: users.find(user => user.id === post.userId),
  comments: comments.filter(comment => comment.postId === post.id),
}));

const App = () => (
  <div className="App">
    <PostList posts={postsWithUserAndComments} />
  </div>
);

export default App;
