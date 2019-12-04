import React from 'react';

import './App.css';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

import PostList from './components/PostList';

const App = () => {
  const postsArr = [...posts];
  const postsListArr = postsArr.map((post) => {
    const author = users.find(person => person.id === post.userId);
    const postComments = comments
      .filter(comment => comment.postId === post.id);

    return { ...post, author, postComments };
  });

  return (
    <div className="App">
      <h1>Static list of posts</h1>

      <p>
        <span>posts: </span>
        {posts.length}
      </p>

      <p>
        <span>comments: </span>
        {comments.length}
      </p>

      <p>
        <span>Users: </span>
        {users.length}
      </p>

      <div className="post__list">
        <PostList postsListArr={postsListArr} />
      </div>
    </div>
  );
};

export default App;
