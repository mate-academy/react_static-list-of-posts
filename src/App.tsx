import './App.scss';
import { PostList } from './components/PostList';

import { Post } from './types/Post';
import { User } from './types/User';

import postsFromServer from './api/posts';
import usersFromServer from './api/users';

const getUser
= (userId: number, arr: User[]): number => arr.findIndex(
  user => user.id === userId,
);

export const posts: Post[] = postsFromServer.map(post => ({
  ...post,
  user: usersFromServer[getUser(post.userId, usersFromServer)],
}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts} />
  </section>
);
