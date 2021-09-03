import React from 'react';
import './App.scss';
import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import { PostList } from './components/PostList';

const preparedPosts: Post[] = posts.map(post => {
  const newUser = users.find(user => user.id === post.userId) || null;
  const newComments = comments.filter(comment => post.userId === comment.postId) as Comment[];

  return ({
    ...post,
    user: newUser,
    comments: newComments,
  });
});

const App: React.FC = () => (
  <div className="App">
    <h1>Static list of posts</h1>
    <PostList posts={preparedPosts} />
  </div>
);

export default App;
