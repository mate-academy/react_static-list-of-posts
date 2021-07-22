import React from 'react';
import './App.scss';
import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import { PostList } from './components/PostList';

const generalData = posts.map(
  post => (
    {
      ...post,
      user: users.find(user => user.id === post.userId),
      comments: comments.filter(comment => comment.postId === post.id),
    }
  ),
);

const App = () => (
  <div>
    <div>
      <PostList posts={generalData} />
    </div>
  </div>
);

export default App;
