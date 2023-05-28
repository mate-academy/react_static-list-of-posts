import './App.scss';

// eslint-disable-next-line import/no-duplicates
import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
import { User } from './types/User';
import { Comment } from './types/Comment';
import { Post } from './types/Post';
import { PostList } from './components/PostList';

function getUser(userId: number): User | null {
  const foundUser = usersFromServer.find(user => user.id === userId);

  return foundUser || null;
}

function getComment(postId: number): Comment | null {
  const foundComment = commentsFromServer.find(
    comment => comment.id === postId,
  );

  return foundComment || null;
}

export const posts: Post[] = postsFromServer.map(post => ({
  ...post,
  user: getUser(post.userId),
  comment: getComment(post.userId),
}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={posts} />
  </section>
);
