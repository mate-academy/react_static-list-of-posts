import React from 'react';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import { PostList } from './components/PostList/PostList';

const preparedPosts = posts.map(post => {
  const user = users.find(person => person.id === post.userId) || null;
  const result = comments.filter(comment => comment.postId === post.id);

  return { ...post, user, comments: result };
});

// eslint-disable-next-line no-console
console.log(preparedPosts);

const App: React.FC = () => (
  <div className="App">
    <h1>Static list of posts</h1>
    <PostList postArray={preparedPosts} />
  </div>
);

export default App;
