import React from 'react';
import { Post } from './types/Post';
import { User } from './types/User';
import { PostList } from './components/PostList';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

const App: React.FC = () => {
  const preparedPosts: Post[] = posts.map(post => ({
    ...post,
    user: users.find(user => user.id === post.userId) as User || null,
    comments: comments.filter(comment => comment.postId === post.id),
  }));

  return (
    <div className="App">
      <h1 className="App__title">Static list of posts</h1>
      <PostList posts={preparedPosts} />
    </div>
  );
};

export default App;
