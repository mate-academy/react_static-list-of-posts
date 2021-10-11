import React from 'react';
import { PreparedPost } from './types/PreparedPost';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import { PostList } from './components/PostList/PostList';

const App: React.FC = () => {
  const preparedPosts: PreparedPost[] = posts.map(post => {
    const findedUser = users.find(user => post.userId === user.id);
    const findedComment = comments.filter(comment => post.id === comment.postId);

    return {
      ...post,
      user: findedUser,
      comments: findedComment,
    };
  });

  return (
    <div className="App">
      <PostList posts={preparedPosts} />
    </div>
  );
};

export default App;
