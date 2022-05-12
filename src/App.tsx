import React from 'react';
import './App.scss';
import posts from './api/posts';
import { Post } from './types/Post';
import PostList from './components/PostList/PostList';
import comments from './api/comments';
import users from './api/users';

const preparedPosts: Post[] = posts.map(post => (
  {
    ...post,
    user: users.find(user => (
      user.id === post.userId
    )) || null,
    comment: comments.filter(comment => (
      comment.postId === post.id
    )),
  }
));

const App: React.FC = () => (
  <div className="App" data-cy="post-info">
    <h1>Static list of posts</h1>
    <PostList posts={preparedPosts} />
  </div>
);

export default App;
