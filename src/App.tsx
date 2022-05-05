import React from 'react';
import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import { PostList } from './Components/PostList';
import { Comment } from './Types/comment';

export const preparedPosts = posts.map(post => (
  {
    ...post,
    user: users.find(user => user.id === post.userId) || null,
    comment: comments
      .filter(comment => comment.postId === post.id) as Comment[],
  }
));

const App: React.FC = () => (
  <div className="App">
    <h1>Static list of posts</h1>

    <PostList posts={preparedPosts} />
  </div>
);

export default App;
