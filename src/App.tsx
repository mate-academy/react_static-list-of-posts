import React from 'react';
import './App.scss';
import { PostList } from './components/PostList/PostList';
import posts from './api/posts';
import users from './api/users';
import comments from './api/comments';
import { Post } from './types/Post';

const postsPrepered: Post[] = posts.map(post => ({
  ...post,
  user: users.find(user => user.id === post.userId) || null,
  comments: comments.filter(comment => comment.postId === post.id),
}));

const App: React.FC = () => (

  <div className="App">
    <h1>Static list of posts</h1>
    <div className="main">
      <PostList posts={postsPrepered} />
    </div>

  </div>
);

export default App;
