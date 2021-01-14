import React from 'react';
import PostList from './components/PostList';
import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

function App() {
  const dataAll = posts.map((post) => {
    const postUsers = users.find(user => user.id === post.userId);
    const postComments = comments.filter(comment => comment.postId === post.id);
    const result = {
      users: postUsers,
      comments: postComments,
      ...post,
    };

    return result;
  });

  return (
    <div className="App">
      <div className="container">
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
        <PostList compressedData={dataAll} />
      </div>
    </div>
  );
}

export default App;
