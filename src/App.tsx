import './App.scss';

import { Post } from './types/Post';
import { User } from './types/User';
import { Comment } from './types/Comment';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

import { PostList } from './components/PostList';

function getUserById(userId: number): User {
  const foundUser = usersFromServer.find(user => user.id === userId);

  if (!foundUser) {
    throw new Error('Invalid post: user not found.');
  }

  return foundUser;
}

function getCommentsByPostId(id: number): Comment[] {
  const foundComments = commentsFromServer.filter(
    comment => comment.postId === id,
  );

  return foundComments;
}

export const posts: Post[] = postsFromServer.map(post => ({
  ...post,
  user: getUserById(post.userId),
  comments: getCommentsByPostId(post.id),
}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={posts} />
  </section>
);
