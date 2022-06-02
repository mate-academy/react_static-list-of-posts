import React from 'react';

import './App.scss';
import { PostList } from './components/PostList';
import {
  Post,
  Comment,
  User,
  PreparedPost,
} from './react-app-env';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

const App: React.FC = () => {
  const prePreparedPosts = (
    posts: Post[],
    comments: Comment[],
    users: User[],
  ): PreparedPost[] => {
    return posts.map(post => (
      {
        ...post,
        user: users.find(user => post.userId === user.id) || null,
        comment: comments.filter(comment => post.id === comment.postId),
      }
    ));
  };

  const preparedPosts = prePreparedPosts(
    postsFromServer,
    commentsFromServer,
    usersFromServer,
  );

  return (
    <div className="App">
      <h1>Static list of posts</h1>
      <PostList preparedPosts={preparedPosts} />
    </div>
  );
};

export default App;
