import React from 'react';
import './App.scss';
import posts from './api/posts';
import commentsFromServer from './api/comments';
import users from './api/users';
import { PreparedPost } from './types';
import { PostList } from './components/PostList';

const preparedPosts: PreparedPost[] = posts.map(post => {
  const user = users.find(person => person.id === post.userId);
  const comments = commentsFromServer.filter(
    comment => comment.postId === post.id,
  );

  return {
    ...post,
    user,
    comments,
  };
});

const App: React.FC = () => (
  <div className="App">
    <PostList preparedPosts={preparedPosts} />
  </div>
);

export default App;
