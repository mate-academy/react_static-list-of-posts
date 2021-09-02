import React from 'react';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

import { PostList } from './components/PostList';

const preparedPosts: Post[] = postsFromServer.map(post => {
  const user = usersFromServer.find(person => person.id === post.userId) || null;
  const comments = commentsFromServer.filter(comment => comment.postId === post.id) as Comment[];
  const preparedPost = { user, comments, ...post };

  return preparedPost;
});

const App: React.FC = () => (
  <div className="App">
    <PostList posts={preparedPosts} />
  </div>
);

export default App;
