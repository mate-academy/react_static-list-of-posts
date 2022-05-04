import React from 'react';
import { PostList } from './components/PostList/PostList';

import './App.scss';

import {
  Post, User, FullPost, Comment,
} from './types';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

function preparePosts(
  posts: Post[],
  users: User[],
  comments: Comment[],
): FullPost[] {
  return posts.map(post => ({
    ...post,
    user: users.find(user => user.id === post.userId),
    comments: comments.filter(comment => comment.postId === post.id),
  }));
}

const preparedPosts = preparePosts(
  postsFromServer,
  usersFromServer,
  commentsFromServer,
);

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Static list of posts</h1>
      <PostList posts={preparedPosts} />
      ))
    </div>
  );
};

export default App;
