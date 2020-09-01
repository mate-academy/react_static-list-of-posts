import React from 'react';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

import PostList from './components/PostList/PostList';

const App = () => {
  const prepearedPosts = posts.map((post) => {
    const author = users.find(user => user.id === post.userId);
    const commentsArr = comments.filter(
      comment => post.userId === comment.postId,
    );

    return {
      ...post,
      author,
      commentsArr,
    };
  });

  return (
    <div className="App">
      <h1>Static list of posts</h1>

      <PostList posts={prepearedPosts} />

    </div>
  );
};

export default App;
