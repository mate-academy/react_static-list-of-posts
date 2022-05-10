import React from 'react';

import './App.scss';

import { User } from './types/User';
import { Comment } from './types/Comment';
import { Post } from './types/Post';

import { PostList } from './components/PostList';

import posts from './api/posts';
import users from './api/users';
import comments from './api/comments';

const preparedPosts: Post[] = posts.map(
  (post: Omit<Post, 'user' | 'commentsArr'>) => ({
    ...post,
    user: users.find((user: User) => user.id === post.userId),
    commentsArr: comments.filter((comment: Comment) => {
      return comment.postId === post.id;
    }),
  }),
);

const App: React.FC = () => (
  <div className="App">
    <PostList posts={preparedPosts} />
  </div>
);

export default App;
