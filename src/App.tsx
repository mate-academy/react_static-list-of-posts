import React from 'react';
import { Comment } from './types/Comment';
import { PreparedPost } from './types/PreparedPost';
import './App.scss';
import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import { PostList } from './components/PostList/PostList';

const preparedPosts: PreparedPost[] = posts.map(post => {
  const userFromPost = users.find(user => user.id === post.userId);
  const userComments: Comment[] = comments.filter(comment => comment.postId === post.id);

  return { ...post, user: userFromPost || null, comments: [...userComments] };
});

const App: React.FC = () => (
  <div className="App">
    <h1>Static list of posts</h1>
    <PostList posts={preparedPosts} />
  </div>
);

export default App;
