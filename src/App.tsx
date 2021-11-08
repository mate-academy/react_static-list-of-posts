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
  PreparedPosts,
} from './typedefs';

function getPreparedPostsPosts(
  usersList: User[],
  commentList: Comment[],
  postsList: Post[],
):PreparedPosts[] {
  return postsList.map((post:Post) => {
    return {
      ...post,
      user: usersList.find((user: User) => user.id === post.userId),
      comments: commentList.filter((comment: Comment) => comment.postId === post.id),
    };
  });
}

const PreparedPostsPosts = getPreparedPostsPosts(users, comments, posts);

const App: React.FC = () => (
  <div className="App">
    <h1>Static list of posts</h1>
    <PostList posts={PreparedPostsPosts} />
  </div>
);

export default App;
