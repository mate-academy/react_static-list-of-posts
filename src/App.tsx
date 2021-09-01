import React from 'react';

import './App.scss';

import postsFromApi from './api/posts';
import commentsFromApi from './api/comments';
import usersFromApi from './api/users';
import { PostList } from './components/Post/PostList';

const preparedPosts = postsFromApi.map(post => {
  const user = usersFromApi.find(({ id }) => id === post.userId)
    || null;

  const comments = commentsFromApi.filter(comment => {
    return comment.postId === post.id;
  });

  return {
    ...post,
    user,
    comments: comments.length ? comments : null,
  };
});

const App: React.FC = () => (
  <div className="App">
    <PostList posts={preparedPosts} />
  </div>
);

export default App;
