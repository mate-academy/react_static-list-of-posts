import { PostList } from './components/PostList';
import postsFromServer from './api/posts';
import usersFromServer from './api/users';
import commentsFromServer from './api/comments';
import './App.scss';
import { PostData, User } from './types';

const posts: PostData[] = postsFromServer.map(post => ({
  ...post,

  user: usersFromServer.find(user => (
    user.id === post.userId
  )) as User,

  comments: commentsFromServer.filter(comment => (
    comment.postId === post.id
  )),
}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts} />
  </section>
);
