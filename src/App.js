import React from 'react';

import './App.css';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import PostList from './components/PostList/PostList';

function getPostsWithUsersAndComments(postList, usersList, commentList) {
  postList.forEach((post) => {
    // eslint-disable-next-line no-param-reassign
    post.user = usersList.find(user => user.id === post.userId);
    // eslint-disable-next-line no-param-reassign
    post.comments = commentList.filter(comment => comment.postId === post.id);
  });

  return postList;
}

const PostsWithUsersAndComments = getPostsWithUsersAndComments(
  posts, users, comments
);

const App = () => (
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
    <PostList posts={PostsWithUsersAndComments} />
  </div>
);

export default App;
