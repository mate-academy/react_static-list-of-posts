// Libraries
import React from 'react';

// Styles
import './App.scss';

// Data
import postsFromServer from './api/posts';
import usersFromServer from './api/users';

// Types
import { User } from './types/User';
import { Post } from './types/Post';

// Components
import { PostList } from './components/PostList';

// Functions
function getUser(userId: number): User | null {
  const foundUser = usersFromServer.find(user => user.id === userId);

  return foundUser || null;
}

// Variables
export const posts: Post[] = postsFromServer.map(post => ({
  ...post,
  user: getUser(post.userId),
}));

// Component
export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList
      posts={posts}
    />
  </section>
);
