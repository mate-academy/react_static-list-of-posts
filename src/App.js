import React from 'react';
import PostList from './components/PostList/PostList';
import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import './AppStyle.css';

const PostsWithUser = posts.map(post => ({
  ...post,
  user: users.find(user => user.id === post.userId),
  commentsList: comments.filter(comment => comment.postId === post.userId),
}));
const App = () => (
  <div className="App">
    <h1>Static list of posts</h1>
    <PostList posts={PostsWithUser} />
  </div>
);

export default App;
