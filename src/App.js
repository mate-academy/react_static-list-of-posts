import React from 'react';

import './normalize.css';
import PostsGenerator from './components/posts/posts';

const App = () => (
  <section class="posts-container">
    <PostsGenerator/>
  </section>
);

export default App;
