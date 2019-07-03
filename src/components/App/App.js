import React from 'react';
import './App.css';
import ListOfPosts from '../ListOfPosts/ListOfPosts';

import posts from '../../api/posts';
import comments from '../../api/comments';
import users from '../../api/users';

const preparedPostsList = posts.map(post => ({
  post,
  user: users.find(user => user.id === post.userId),
  comments: comments.filter(comment => comment.postId === post.id),
}));

const App = () => (
  <main className="main">
    <ListOfPosts postsList={preparedPostsList} />
  </main>
);

export default App;
