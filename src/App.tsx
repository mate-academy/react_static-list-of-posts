import { Post } from './types/Post';
import { Comment } from './types/Comment';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import { PostList } from './components/Post-list/Post-list';

const preparedPosts: Post[] = posts.map(post => ({
  ...post,
  user: users.find(user => user.id === post.userId) || null,
  comments: comments.filter(comment => comment.postId === post.id) as Comment[],
}));

const App: React.FC = () => (
  <div className="App">
    <h1>Static list of posts</h1>
    <PostList content={preparedPosts} />
  </div>
);

export default App;
