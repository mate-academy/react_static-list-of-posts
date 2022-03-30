import React from 'react';

import './App.scss';
import { Post } from './types/Post';
import { PostList } from './components/PostList';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

const preparedPosts: Post[] = posts.map((post) => {
  const currentUser = users.find((user) => user.id === post.userId);
  const currentComments = comments.filter((comment) => comment.postId === post.id);

  const preparedPost: Post = {
    user: currentUser || null,
    comments: currentComments || null,
    ...post,
  };

  return preparedPost;
});

const App: React.FC = () => (
  <div className="App">
    <h1>Static list of posts</h1>
    <div>
      <PostList listOfPosts={preparedPosts} />
    </div>
  </div>
);

export default App;
