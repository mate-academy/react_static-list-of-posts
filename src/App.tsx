import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import { Post } from './types/Post';
import { PostsList } from './components/PostsList';

export const preparedPosts: Post[] = posts.map(post => ({
  ...post,
  user: users.find(user => user.id === post.userId),
  comments: comments.filter(comment => comment.postId === post.id),
}));

const App: React.FC = () => (
  <div className="App">
    <div className="posts">
      <PostsList posts={preparedPosts} />
    </div>
  </div>
);

export default App;
