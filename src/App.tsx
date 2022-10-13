import './App.scss';
import postsFromServer from './api/posts';
import { PostList } from './components/PostList';
import { Post } from './types/Post';
import { getComments, getUser } from './utils/utils';

const posts: Post[] = postsFromServer.map(post => ({
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
