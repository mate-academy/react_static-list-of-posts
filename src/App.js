import React from 'react';
import './App.scss';

import { PostList } from './components/PostList';

import { postsList } from './api/postsList';
import { commentsList } from './api/commentsList';
import { usersList } from './api/usersList';

const addedUsersAndCommentsWithinPosts = postsList.map(
  post => ({
    ...post,
    user: usersList.find(user => user.id === post.userId),
    comments: commentsList.filter(comment => comment.postId === post.id),
  }),
);

export const App = () => (
  <div className="App">
    <h1 className="app__title">
      Static list of posts
    </h1>
    <PostList
      postsList={addedUsersAndCommentsWithinPosts}
    />
    <p>
      <span>posts: </span>
      {postsList.length}
    </p>

    <p>
      <span>comments: </span>
      {commentsList.length}
    </p>

    <p>
      <span>Users: </span>
      {usersList.length}
    </p>
  </div>
);
