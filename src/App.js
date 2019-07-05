import React from 'react';
import comments from './api/comments';
import posts from './api/posts';
import users from './api/users';
import PostList from './components/PostList';
import './App.scss';

const publishedPosts = posts.map(post => (
  {
    ...post,
    user: users.find(user => user.id === post.userId),
    commentsToPost: comments.filter(comment => comment.postId === post.id)
  }
));

const App = () => (
  <div className="App">
    <h1>Static list of posts</h1>
    <PostList posts={publishedPosts} />
  </div>
);

export default App;
