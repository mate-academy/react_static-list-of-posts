import commentsFromServer from './api/comments';
import postsFromServer from './api/posts';
import usersFromServer from './api/users';

import { PostList } from './components/PostList';

import './App.scss';

import { Comment } from './types/Comment';
import { Post } from './types/Post';
import { User } from './types/User';

function getUserById(userId: number): User {
  const foundUser = usersFromServer.find(user => user.id === userId);

  if (!foundUser) {
    throw new Error(`User with ID ${userId} not found`);
  }

  return foundUser;
}

function getComments(postId: number): Comment[] {
  const foundComments
  = commentsFromServer.filter(comment => comment.postId === postId);

  return foundComments;
}

export const posts: Post[] = postsFromServer.map(post => ({
  ...post,
  user: getUserById(post.userId),
  comments: getComments(post.id),
}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts} />
  </section>
);
