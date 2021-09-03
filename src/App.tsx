import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
import { PostList } from './components/PostList';

const preparedPosts: Post[] = postsFromServer.map(post => {
  const user = usersFromServer.find(person => person.id === post.userId) as User || null;
  const comments = commentsFromServer.filter(comment => comment.postId === post.id) as Comment[];

  return { ...post, user, comments };
});

const App: React.FC = () => (
  <div className="App">
    <h1>Static list of posts</h1>
    <PostList posts={preparedPosts} />
  </div>
);

export default App;
