import React from 'react';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import { PostType } from './types/PostType';
import { PostInfo } from './components/PostInfo';

export const preparedPosts = posts.map<PostType>(post => ({
  ...post,
  user: users.find(person => person.id === post.userId),
  comments: comments.filter(com => post.id === com.postId),
}));

const App: React.FC = () => (
  <div className="App">
    {preparedPosts.map(post => <PostInfo {...post} />)}
  </div>
);

export default App;
