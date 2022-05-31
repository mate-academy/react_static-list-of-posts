import React from 'react';

import './App.scss';
import {
  Users,
  Comments,
  Posts,
  PreparedPosts,
} from './react-app-env';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
import { PostList } from './components/PostList/PostList';

const App: React.FC = () => {
  const prepared = (
    posts: Posts[],
    comments: Comments[],
    users: Users[],
  ): PreparedPosts[] => {
    return posts.map(post => ({
      ...post,
      user: users.find(user => user.id === post.userId) || null,
      comments: comments
        .filter(comment => comment.postId === post.userId),
    }));
  };

  const preparedPosts = prepared(
    postsFromServer,
    commentsFromServer,
    usersFromServer,
  );

  return (
    <div className="post">
      <h1>Static list of posts</h1>
      <PostList
        preparedPosts={preparedPosts}
      />
    </div>
  );
};

export default App;
