import React from 'react';
import { PostList } from './components/PostList';
import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

const prepearedPostList = posts.map(post => ({
  ...post,
  author: users.find(user => post.userId === user.id),
  comments: comments.filter(comment => comment.postId === post.id),
}
));

const App = () => (
  <div className="App">
    <PostList posts={prepearedPostList} />
  </div>
);

export default App;
