import React from 'react';

import './App.scss';

import posts from './api/posts';
import commentsBase from './api/comments';
import users from './api/users';
import { PostsType } from './types/PostsType';
import { PostList } from './components/PostList';

const App: React.FC = () => {
  const prepearedPosts: PostsType[] = posts.map(post => {
    const user = users.find(person => person.id === post.userId) || null;
    const comments = commentsBase.filter(coment => coment.postId === post.id);

    return {
      ...post,
      user,
      comments,
    };
  });

  return (
    <>
      <PostList posts={prepearedPosts} />
    </>
  );
};

export default App;
