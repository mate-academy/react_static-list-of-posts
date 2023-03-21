import { Post } from './types/Post';
import { User } from './types/User';
import { Comment } from './types/Comment';

import { PostList } from './components/PostList';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

import './App.scss';

function findUserById(userId: number): User | null {
  const foundUser = usersFromServer.find(user => user.id === userId);

  return foundUser || null;
}

function findCommentsByUser(id: number): Comment[] {
  return commentsFromServer.filter((comment) => (
    comment.postId === id
  ));
}

export const posts: Post[] = postsFromServer.map(post => ({
  ...post,
  user: findUserById(post.userId),
  comments: findCommentsByUser(post.id),
}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={posts} />
  </section>
);
