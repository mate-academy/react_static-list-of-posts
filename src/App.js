import React from 'react';
import './App.css';
import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import PostList from './components/PostList';

function getPostsWithUsersAndComments(postsArr, usersArr, commentsArr) {
  return postsArr.map(post => (
    {
      ...post,
      user: usersArr.find(user => user.id === post.userId),
      comments: commentsArr.filter(comment => comment.postId === post.id),
    }
  ));
}

const needArrOfDate = getPostsWithUsersAndComments(posts, users, comments);

const App = () => (
  <div className="app">
    <h1 className="h1">Static list of posts</h1>
    <PostList posts={needArrOfDate} />
  </div>
);

export default App;
