import React from 'react';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import { Posts } from './types/Posts';
import { Comments } from './types/Comments';
import { Users } from './types/Users';
import { PostList } from './components/PostList/PostList';

function prepearingPosts(
  postsList: Posts[],
  commentsList : Comments[],
  usersList : Users[],
) {
  return (postsList.map(post => ({
    ...post,
    user: usersList.find(user => user.id === post.userId),
    comment: commentsList.filter(comment => comment.postId === post.id) || [],
  })));
}

const prepearedPosts = prepearingPosts(posts, comments, users);

const App: React.FC = () => (
  <div className="App">
    <h1>Static list of posts</h1>
    <div className="container posts__container">
      <PostList post={prepearedPosts} />
    </div>
  </div>
);

export default App;
