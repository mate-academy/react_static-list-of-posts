import 'bulma';
import './App.scss';

import { PostList } from './components/PostList';

import postsFromServer from './api/posts';
import { getUser } from './api/getUser';
import { getComments } from './api/getComments';

const posts = postsFromServer.map(post => ({
  ...post,
  user: getUser(post.userId),
  comments: getComments(post.id),
}));

export const App: React.FC = () => (
  <section className="App container section ">
    <h1 className="App__title title is-1">
      Static list of posts
    </h1>
    <PostList posts={posts} />
  </section>
);
