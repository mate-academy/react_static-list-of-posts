import React from 'react';
import { PostList } from './components/PostList/PostList';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

const preparedPosts: Post[] = posts.map(post => ({
  ...post,

  user: users.find(person => person.id === post.userId) || null,
  commentsOfThisPost: comments.filter(comment => comment.postId === post.id) as Comment[],
}));

const App: React.FC = () => (
  <div className="App">
    <PostList posts={preparedPosts} />
  </div>
);

export default App;
