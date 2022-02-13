import React from 'react';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import { Post } from './types/post';
import { PostList } from './components/PostList/PostList';

const App: React.FC = () => {
  const preparedPosts: Post[] = posts.map(post => {
    const preparedPost: Post = {
      user: users.find(user => user.id === post.userId),
      id: post.id,
      title: post.title,
      body: post.body,
      comments: comments.filter(comment => comment.postId === post.id),
    };

    return preparedPost;
  });

  return (
    <div className="App">
      <h1>Static list of posts</h1>
      <PostList posts={preparedPosts} />
    </div>
  );
};

export default App;
