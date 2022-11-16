import './App.scss';
import { PostList } from './components/PostList';

import { Post } from './types/Post';
import { User } from './types/User';
import { Comment } from './types/Comment';

import postsFromServer from './api/posts';
import usersFromServer from './api/users';
import commentsFromServer from './api/comments';

const getUser
= (userId: number, arr: User[]): User | undefined => arr.find(
  user => user.id === userId,
);

const getComments
= (id: number, arr: Comment[]): Comment[] => arr.filter(
  comment => comment.postId === id,
);

export const posts: Post[] = postsFromServer.map(post => ({
  ...post,
  user: getUser(post.userId, usersFromServer),
  comments: getComments(post.id, commentsFromServer),
}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts} />
  </section>
);
