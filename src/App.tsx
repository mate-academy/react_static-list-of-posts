import React from 'react';
import './App.scss';
import { PostList } from './components/PostList';
import { getPreparedPosts } from './api/helpers';
import { PageNavbar } from './components/PageNavbar';

export const App: React.FC = () => (
  <div className="App">
    <header>
      <PageNavbar
        brandTitle="YourPosts"
        requestSample="post"
      />
    </header>

    <main>
      <PostList posts={getPreparedPosts()} />
    </main>
  </div>
);
