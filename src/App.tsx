import React from 'react';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import { IPost } from './types/IPost';
import { PostList } from './components/PostList/PostList';

const preparedPosts: IPost[] = posts.map((post) => {
  return {
    ...post,
    user: users.find(user => user.id === post.userId) || null,
    comments: comments.filter(coment => coment.postId === post.id),
  };
});

const App: React.FC = () => {
  return (
    <div className="app">
      <h1 className="app__title">Static list of posts</h1>
      <PostList
        posts={preparedPosts}
      />
    </div>
  );
};

export default App;
