
import React from 'react';
import './App.css';
import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import PostList from './components/PostList/PostList';
import getPostsWithUsers from './getPostsWithUsers';
import getPostWithComments from './getPostWithComments';

const App = () => {
  const postsWithUsers = getPostsWithUsers(posts, users);
  const postList = getPostWithComments(postsWithUsers, comments);

  return (
    <div className="App">
      <Header />
      <PostList posts={postList} />
    </div>
  );
};

function Header() {
  return (
    <div className="header">
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
    </div>
  );
}

export default App;
