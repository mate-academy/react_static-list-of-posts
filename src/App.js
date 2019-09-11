import React from 'react';
import './App.css';
import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import PostList from './components/PostList/PostList';

const preparedPosts = UserToPosts(posts, users);

function App() {
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
      <PostList posts={preparedPosts} comments={comments} />
    </div>
  );
}

function UserToPosts(listPost, listUser) {
  return listPost.map(post => ({
    ...post,
    user: listUser.find(user => user.id === post.userId),
  }));
}

export default App;
