import React from 'react';
import { User } from './Types/User';
import { Post } from './Types/Post';
import { Comment } from './Types/Comment';
import { PreparedPostType } from './Types/PreparedPostType';
import { PostList } from './components/PostList';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

function createPreparedPosts(postsArray: Post[], commentsArray: Comment[], usersArray: User[]) {
  const preparedTodos: PreparedPostType[] = postsArray.map(post => ({
    ...post,
    user: usersArray.find((userItem: User) => userItem.id === post.userId) || null,
    comments: commentsArray.filter((commentItem: Comment) => commentItem.postId === post.id),
  }));

  return preparedTodos;
}

const preparedPosts = createPreparedPosts(posts, comments, users);

const App: React.FC = () => (
  <div className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList preparedPosts={preparedPosts} />
  </div>
);

export default App;
