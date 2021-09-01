import React from 'react';

import './App.scss';

import postsFromApi from './api/posts';
import commentsFromApi from './api/comments';
import users from './api/users';
import { PostList } from './components/PostList';
import { Post } from './types/Post';

const preparedPosts: Post[] = postsFromApi.map(post => {
  const user = users.find(person => person.id === post.userId) || null;

  const comments = commentsFromApi.filter(commentFromApi => {
    return commentFromApi.postId === post.id;
  });

  return {
    ...post,
    user,
    comments: comments.length ? comments : null,
  };
});

const App: React.FC = () => (
  <div className="App">
    <h1 className="title">
      Static list of posts
    </h1>
    <div className="container">
      <PostList posts={preparedPosts} />
    </div>
  </div>
);

export default App;
