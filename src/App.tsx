import React from 'react';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import { Post } from './types';
import { PostInfo } from './components/PostInfo';

const preparedPosts: Post[] = posts.map(
  post => ({
    ...post,
    user: users.find(user => user.id === post.userId) || null,
    comments: comments.filter(comment => comment.postId === post.id),
  }),
);

const App: React.FC = () => (
  <div className="App">
    <h1 className="App__heading">
      Static list of posts
    </h1>
    {preparedPosts.map(
      post => (
        <div
          key={post.id}
          className="App__post"
        >
          <PostInfo
            post={post}
          />
        </div>

      ),
    )}
  </div>
);

export default App;
