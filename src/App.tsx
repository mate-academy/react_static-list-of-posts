import './App.scss';
import posts from './api/posts';
import users from './api/users';
import comments from './api/comments';
import { Post } from './type';
import { PostList } from './components/PostList/PostList';

const preparedPost: Post[] = posts.map(post => ({
  ...post,
  user: users.find(user => user.id === post.userId),
  comments: comments.filter(({ postId }) => postId === post.id),
}));

const App: React.FC = () => (
  <div className="app">
    <h1 className="title">Static list of posts</h1>
    <PostList list={preparedPost} />
  </div>
);

export default App;
