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

    <main
      className="App__main d-flex justify-content-center"
    >
      <PostList posts={getPreparedPosts()} />
    </main>
  </div>
);
