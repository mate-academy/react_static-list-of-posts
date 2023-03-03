import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

import { Post } from './types/Posts';
import { User } from './types/Users';
import { Comment } from './types/Comments';
import { PostList } from './components/PostList';

function getUser(userId: number): User {
  const user = usersFromServer.find(u => u.id === userId);

  return user as User;
}

function getComments(postId: number): Comment[] {
  return commentsFromServer.filter(comment => comment.postId === postId);
}

export const posts: Post[] = postsFromServer.map(post => ({
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
