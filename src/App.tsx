import React from 'react';
import './App.scss';
import { PostList } from './components/PostList/PostList';
import { Post, Comment, User } from './types';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

const App: React.FC = () => {
  const preparedPosts: Post[] = posts.map((post) => {
    const user: User | undefined = users.find(u => {
      return u.id === post.userId;
    });

    return {
      ...post,
      user: user || null,
      comments: comments.filter((comment: Comment) => {
        return comment.postId === post.id;
      }),
    };
  });

  return (
    <div className="App">
      <h1 className="title">Static list of posts</h1>
      <PostList preparedPosts={preparedPosts} />
    </div>
  );
};

export default App;
