import React from 'react';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import { PostList } from './components/PostList/PostList';

const preparedPosts = posts.map(post => {
  const user = users.find(person => person.id === post.userId) || null;
  const arrayOfComments = comments.filter(comment => comment.postId === post.id);

  return { user, arrayOfComments, ...post };
});

const App: React.FC = () => (
  <div className="App">
    <h1 className="page__title">
      Static list of posts
    </h1>
    <PostList posts={preparedPosts} />
  </div>
);

export default App;
