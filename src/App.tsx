import React from 'react';
import './App.scss';

import posts from './api/posts';
import commentsFromServer from './api/comments';
import users from './api/users';

import { PostList } from './components/PostList/PostList';

const preparedPosts = posts.map((post) => {
  const user = users.find(({ id }) => id === post.userId) || null;
  const comments = commentsFromServer.filter(comment => comment.postId === post.id);

  return {
    ...post,
    user,
    comments: comments.length ? comments : null,
  };
});

const App: React.FC = () => (
  <div className="App">
    <>
      <h1>Static list of posts</h1>
      <PostList posts={preparedPosts} />
    </>
  </div>
);

export default App;
