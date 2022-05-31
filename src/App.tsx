import React from 'react';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
// import { User, UnitedPost, Comment } from './react-app-env';
import { PostList } from './components/PostList/PostList';

const App: React.FC = () => {
  const preparedPosts = posts.map(post => {
    const currentUser = users.find(user => user.id === post.userId);
    const currentComments
      = comments.filter(comment => comment.postId === post.id);

    return {
      ...post,
      user: currentUser,
      comments: currentComments,
    };
  });

  return (
    <div className="App">
      <h1 className="App__title">Static list of posts</h1>
      <PostList posts={preparedPosts} />
    </div>
  );
};

export default App;
