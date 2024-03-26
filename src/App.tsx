import React from 'react';
import './components/CommentList/CommentList.scss';
import './components/CommentInfo/CommentInfo.scss';
import './components/PostInfo/PostInfo.scss';
import './components/PostList/PostList.scss';
import './components/UserInfo/UserInfo.scss';
import './App.scss';
import { PostList } from './components/PostList/PostList';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

const posts = postsFromServer.map(post => {
  return {
    ...post,
    comments: commentsFromServer.filter(comment => comment.postId === post.id),
    user: usersFromServer.find(user => user.id === post.userId),
  };
});

export const App: React.FC = () => {
  return (
    <section className="App">
      <h1 className="App__title">Static list of posts</h1>
      <PostList posts={posts} />
    </section>
  );
};
