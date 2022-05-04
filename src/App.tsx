import React from 'react';
import './App.scss';
import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import { PostList } from './components/PostList/PostList';
import { Post } from './types/Post';

const preparedPosts: Post[] = posts.map(post => ({
  ...post,
  user: users.find(user => post.userId === user.id) || null,
  comment: comments.filter(comment => post.id === comment.postId) || null,
}));

const App: React.FC = () => (
  <div className="App">
    <h1 className="App-title">
      Static list of posts
    </h1>
    <PostList
      posts={preparedPosts}
    />
  </div>
);

export default App;
