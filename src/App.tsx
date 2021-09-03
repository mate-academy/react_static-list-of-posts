import { PostList } from './components/PostList/PostList';
import './App.scss';

import Comments from './api/comments';
import Posts from './api/posts';
import Users from './api/users';

const preparedPosts = Posts.map(post => {
  const user = Users.find(person => person.id === post.userId) || null;
  const comment = Comments.filter(article => article.postId === post.id) || null;

  return { ...post, user, comment };
});

export const App: React.FC = () => (
  <div className="App">
    <h1 className="post__title">Static list of posts</h1>
    <PostList posts={preparedPosts} />
  </div>
);
