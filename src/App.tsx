import { readyPosts } from './helper/helper';
import { PostList } from './components/PostList/PostList';

import './App.scss';

const App: React.FC = () => (
  <div className="App">
    <PostList posts={readyPosts} />
  </div>
);

export default App;
