import React from 'react';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

import { PostList } from './components/PostList';
import { Post } from './types/Post';
import { Users } from './types/User';
import { Comments } from './types/Comments';

const preparedPosts: Post[] = posts.map((post) => (
  {
    ...post,
    user: users.find((user: Users) => (post.userId === user.id)) || null,
    comments: comments.filter((com: Comments) => (com.postId === post.id)),
  }
));

const App: React.FC = () => (
  <div>
    <h1>Static list of posts</h1>
    <PostList postList={preparedPosts} />
  </div>
);

export default App;
