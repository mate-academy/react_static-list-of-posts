import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import { PostList } from './components/PostList/PostList';
import './App.scss';

export const preparedPosts = posts.map(post => ({
  ...post,
  user: users.find(user => user.id === post.userId) || null,
  comment: comments.filter(comment => comment.postId === post.id),
}));

const App: React.FC = () => (
  <div className="App">
    <h1>Static list of posts</h1>
    <div className="App__posts">
      <PostList posts={preparedPosts} />
    </div>
  </div>
);

export default App;
