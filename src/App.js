import React from 'react';
import './App.css';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import PostList from './components/PostList';

function getAllPosts(postList, usersList, commentList) {
  postList.forEach((post) => {
    post.user = usersList.find(user => user.id === post.userId);
    post.comments = commentList.filter(comment => comment.postId === post.id);
  });

  return postList;
}

const AllPosts = getAllPosts(
  posts, users, comments
);

const App = () => (
  <>
    <div className="App">
      <h1>Static list of posts</h1>
    </div>
    <PostList posts={AllPosts} />
  </>
);

export default App;
