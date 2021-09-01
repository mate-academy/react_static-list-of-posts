import React from 'react';

// files
import './App.scss';
import { PostList } from './components/PostList/PostList';

// data
import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
import { PreparedPost } from './types/PreparedPost';

const preparedPosts: PreparedPost[] = postsFromServer.map(post => {
  return {
    ...post,
    user: usersFromServer.find(user => user.id === post.userId) || null,
    comments: commentsFromServer.filter(comment => comment.postId === post.id),
  };
});

const App: React.FC = () => (
  <main className="main">
    <PostList postDataList={preparedPosts} />
  </main>
);

export default App;
