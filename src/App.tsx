import './App.scss';
import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import { PostList } from './components/PostList/PostList';

const data = posts.map(post => ({
  ...post,
  comments: comments.filter(comment => comment.postId === post.id),
  user: users.find(user => user.id === post.userId) || null,
}));

const App: React.FC = () => (
  <div className="App">
    <h1 className="App__title">
      Static list of posts
    </h1>
    <PostList posts={data} />
  </div>
);

export default App;
