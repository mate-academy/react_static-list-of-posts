import React from 'react';
import { Comment } from './types/Comment';
import { User } from './types/User';
import { PreparedPost } from './types/PreparedPost';
import './App.scss';
import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import { PostList } from './components/PostList/PostList';

const preparedPosts: PreparedPost[] = [];

posts.forEach(post => {
  const userFromPost: User | undefined = users.find(user => user.id === post.userId);
  const userComments: Comment[] = comments.filter(comment => comment.postId === post.id);

  if (userFromPost && userComments.length) {
    preparedPosts.push({ ...post, user: { ...userFromPost }, comments: [...userComments] });
  }
});

const App: React.FC = () => (
  <div className="App">
    <h1>Static list of posts</h1>
    <PostList posts={preparedPosts} />
  </div>
);

export default App;
