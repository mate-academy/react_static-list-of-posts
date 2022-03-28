import { FC } from 'react';

import { preparedPosts } from './api/data';
import { PostList } from './components/PostList/PostList';
import './App.scss';

const App: FC = () => (
  <div className="App">
    <PostList posts={preparedPosts} />
  </div>
);

export default App;
