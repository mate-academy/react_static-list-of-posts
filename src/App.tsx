import React from 'react';
import { PostList } from './Components/PostLisy';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

const preparedPosts = posts
  .map((post) => {
    return {
      ...post,
      user: users.find(user => post.userId === user.id),
      comments: [...comments].filter(comment => comment.postId === post.id),
    };
  });

const App: React.FC = () => {
  return (
    <div className="App">
      <h1 className="App__title">Static list of posts</h1>
      <PostList
        posts={preparedPosts}
      />
    </div>
  );
};

export default App;
