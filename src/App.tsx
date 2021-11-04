import React from 'react';
import PostList from './components/PostList';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

import {
  User,
  Comment,
  Post,
  Prepared,
} from './react-app-env';

function getPreparedPosts(
  usersList: User[],
  commentList: Comment[],
  postsList: Post[],
):Prepared[] {
  const result = postsList.map((post:Post) => {
    return {
      ...post,
      user: usersList.find((user: User) => user.id === post.userId),
      comments: commentList.filter((comment: Comment) => comment.postId === post.id),
    };
  });

  return result;
}

const preparedPosts = getPreparedPosts(users, comments, posts);

const App: React.FC = () => (
  <div className="App">
    <h1>Static list of posts</h1>
    <PostList preparedPosts={preparedPosts} />
  </div>
);

export default App;
