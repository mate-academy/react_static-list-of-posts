import React from 'react';
import { PostList } from './components/PostList';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

const App = () => {
  const postList = posts.map((post) => {
    const user = users.find(person => person.id === post.userId);
    const allComment = comments.filter(comment => comment.postId === post.id);

    return {
      ...post,
      user,
      allComment,
    };
  });

  return (
    <div className="App">
      <h1 className="App__name">Static list of posts</h1>

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

      <PostList posts={postList} />
    </div>
  );
};

export default App;
