import './App.scss';
import { PostList } from './components/PostList';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

import { PostsT, UsersT, CommentsT } from './types';

function getUserById(userId: number): UsersT | null {
  const foundUser = usersFromServer.find(user => user.id === userId) || null;

  return foundUser;
}

function getCommentById(postId: number): CommentsT[] | null {
  const foundComments = commentsFromServer
    .filter(comment => comment.postId === postId);

  return foundComments || null;
}

const posts: PostsT[] = postsFromServer.map(post => ({
  ...post,
  comments: getCommentById(post.id),
  user: getUserById(post.userId),
}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts} />
  </section>
);
