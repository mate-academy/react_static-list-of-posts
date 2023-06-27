/* eslint-disable max-len */
import './App.scss';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';
import { PostList } from './components/PostList/PostList';

const getCommentsById = postId => commentsFromServer.filter(comment => comment.postId === postId) || null;

const getUserById = userId => usersFromServer.find(({ id }) => id === userId) || null;

const posts = postsFromServer.map(post => ({
  ...post,
  user: getUserById(post.userId),
  comments: getCommentsById(post.id),
}));

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    {posts && <PostList posts={posts} />}
  </section>
);
