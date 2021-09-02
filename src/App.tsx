import React from 'react';
import { PostList } from './components/PostList/PostList';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

const preparedPosts: Post[] = posts.map(post => {
  const user = users.find(person => person.id === post.userId) || null;
  const commentsOfThisPost = comments.filter(comment => comment.postId === post.id) as Comment[];

  return { ...post, user, commentsOfThisPost };
});

const App: React.FC = () => (
  <div className="App">
    <PostList posts={preparedPosts} />
  </div>
);

export default App;
