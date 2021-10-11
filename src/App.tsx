import './App.scss';

import comments from './api/comments';
import users from './api/users';
import posts from './api/posts';
import { PostsList } from './components/PostsList';
import { Post } from './types/Post';

const preparedPosts: Post[] = posts.map(post => ({
  ...post,
  user: users.find(user => user.id === post.userId),
  comments: comments.filter(comment => comment.postId === post.id),
}));

const App: React.FC = () => (
  <div className="page">
    <h1>Static list of posts</h1>
    <PostsList posts={preparedPosts} />
  </div>
);

export default App;
