import React from 'react';
import { PostList } from './components/PostList';

import './App.scss';
import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

const preparedPosts: Post[] = posts.map(post => {
  const user: User | null = users.find(person => person.id === post.userId) || null;

  const usersComments = comments.filter(comment => comment.postId === post.id) as Comment[];

  const newPost: Post = {
    ...post,
    user,
    comments: usersComments,
  };

  return newPost;
});

const App: React.FC = () => {
  return (
    <div className="App container">
      <h1 className="text-center">List of posts</h1>
      <PostList preparedPosts={preparedPosts} />
    </div>
  );
};

export default App;
