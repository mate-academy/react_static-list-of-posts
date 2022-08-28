import { PostList } from './components/PostList';

import { Post } from './types/Post';
import { Comment } from './types/Comment';
import { User } from './types/User';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

function getComments(postId: number): Comment[] {
  return commentsFromServer
    .filter(comment => comment.postId === postId);
}

function getUser(userId: number): User | null {
  const postUser = usersFromServer
    .find(user => user.id === userId);

  return postUser || null;
}

const posts: Post[] = postsFromServer.map(post => ({
  ...post,
  comments: getComments(post.id),
  user: getUser(post.userId),
}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={posts} />
  </section>
);
