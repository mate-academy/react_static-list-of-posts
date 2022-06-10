import React from 'react';

import './App.scss';
import { PostList } from './components/PostList/PostList';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import { PostData } from './types/PostData';

const preparedPosts: PostData[] = posts.map(post => {
  const postAuthor = users.find(user => user.id === post.userId);
  const postComments = comments.filter(comment => comment.postId === post.id);

  return {
    ...post,
    user: postAuthor || null,
    comments: postComments || null,
  };
});

const App: React.FC = () => (
  <div className="App">
    <h1 className="title">Static list of posts</h1>
    <PostList data={preparedPosts} />
  </div>
);

export default App;
