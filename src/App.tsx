import React from 'react';

import './App.scss';
import PostList from './components/PostList';

import posts from './api/posts';
import commentsFromServer from './api/comments';
import users from './api/users';

const preparedPosts: Post[] = posts.map(post => {
  const person = users.find(user => user.id === post.userId) || null;

  const comments = commentsFromServer.filter(comment => comment.postId === post.id) as Comment[];

  return { ...post, person, comments };
});

const App: React.FC = () => (
  <div className="App">
    <h1>Posts</h1>
    <div>
      <PostList posts={preparedPosts} />
    </div>

  </div>
);

export default App;
