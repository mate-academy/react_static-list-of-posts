import React from 'react';
import './App.scss';
import { Post } from './types/Post';
import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import { PostList } from './components/PostList';

type Props = {
  posts: Post[];
};

export const preparedPosts = posts.map(post => {
  const user = users.find(person => person.id === post.userId) || null;
  const comment = comments.filter(com => com.postId === post.id);

  return { ...post, user, comment };
});

const App: React.FC<Props> = () => (
  <div className="App">
    <h1>Static list of posts</h1>
    <PostList posts={preparedPosts} />
  </div>
);

export default App;
