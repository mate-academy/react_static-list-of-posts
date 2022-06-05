import React from 'react';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
import { PostList } from './components/PostList/PostList';
import {
  Post,
  User,
  Comment,
  PreparedPost,
} from './react-app-env';

const App: React.FC = () => {
  const preparePosts = (
    posts: Post[],
    users: User[],
    comments: Comment[],
  ): PreparedPost[] => {
    return posts.map((post: Post) => ({
      ...post,
      user: users.find((user: User) => post.userId === user.id) || null,
      comments: comments
        .filter((comment: Comment) => comment.postId === post.id),
    }));
  };

  const preparedPosts = preparePosts(
    postsFromServer,
    usersFromServer,
    commentsFromServer,
  );

  return (
    <div className="App">
      <h1>Static list of posts</h1>
      <PostList preparedPosts={preparedPosts} />
    </div>
  );
};

export default App;
