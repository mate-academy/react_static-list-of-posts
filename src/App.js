import React from 'react';
import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import PostList from './Components/PostList';

const combinedPostData = posts.map(post => ({
  ...post,
  user: users.find(user => user.id === post.userId),
  comments: comments.filter(comment => comment.postId === post.id),
}));

const App = () => (
  <div className="App">
    <h1>Static list of posts</h1>
    <PostList posts={combinedPostData} />
  </div>
);

export default App;
