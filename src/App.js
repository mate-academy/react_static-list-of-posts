import React from 'react';
import './App.css';
import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import { Posts } from './components/Posts';
import { prepareDate } from './utils/prepareDate';

const postsWithAuthor = prepareDate(posts, users);

const App = () => (
  <div className="App">
    <Posts
      postsList={postsWithAuthor}
      postsComments={comments}
    />
  </div>
);

export default App;
