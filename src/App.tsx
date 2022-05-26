import React from 'react';
import { PostList } from './components/PostList';
import './App.scss';
import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

const preparedPosts = posts.map(post => {
  const user = users.find(person => post.userId === person.id) || null;
  const commentArr = comments.filter(comment => comment.postId === post.userId) as Comment[];

  return { ...post, user, commentArr };
});

const App: React.FC = () => (
  <div className="App">
    <h1 className="heading">Static list of posts</h1>
    <PostList post={preparedPosts} />
  </div>
);

export default App;
