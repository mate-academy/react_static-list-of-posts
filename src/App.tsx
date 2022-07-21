import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
import { PostList } from './components/PostList';
import { Post } from './types/Post';

const getUser = (id: number) => {
  const foundU = usersFromServer.find(user => user.id === id);

  return foundU || null;
};

const getComments = (postId: number) => {
  const foundCom = commentsFromServer
    .filter(comment => comment.postId === postId);

  return foundCom;
};

const posts: Post[] = postsFromServer.map(post => ({
  ...post,
  user: getUser(post.userId),
  comments: getComments(post.id),
}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts} />
  </section>
);
