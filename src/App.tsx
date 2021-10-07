import React from 'react';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import { Post } from './types/Post';
import { User } from './types/User';
import { PostList } from './components/PostList/index';

const preparedArray: Post[] = posts.map(post => {
  const person: User | undefined = users.map(user => {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
    };
  }).find(user => user.id === post.userId);
  const postComments = comments.filter(comment => comment.postId === post.id);

  return {
    user: (person !== undefined) ? person : null,
    comments: postComments,
    ...post,
  };
});

const App: React.FC = () => (
  <div className="App">
    <h1 className="title">Static list of posts</h1>
    <PostList preparedArray={preparedArray} />
  </div>
);

export default App;
