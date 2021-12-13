import React from 'react';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import { PreparedPost } from './typedefs/PreparedPost';
import { PostList } from './components/PostList';

const preparedPosts: PreparedPost[] = posts.map(
  post => {
    return {
      ...post,

      user: users.find(user => user.id === post.userId),
      comments: comments.filter(comment => comment.postId === post.id),
    };
  },
);

const App: React.FC = () => (
  <div className="App">
    <h1 className="App__title">
      Posts list
    </h1>
    <PostList readyPosts={preparedPosts} />
  </div>
);

export default App;
