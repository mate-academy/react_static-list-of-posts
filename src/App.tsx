import React from 'react';
// styles
import './App.scss';
// types
import { Post } from './types/Post';
import { Comment } from './types/Comment';
// data base
import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
// component
import { PostList } from './components/PostList';

const preparedPosts: Post[] = posts.map(post => ({
  ...post,
  user: users.find(user => user.id === post.userId) || null,
  comments: comments.filter(comment => comment.postId === post.id) as Comment[],
}));

const App: React.FC = () => (
  <div className="App">
    <PostList content={preparedPosts} />
  </div>
);

export default App;
