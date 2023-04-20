import './App.scss';
import { PostList } from './components/PostList';
import { User } from './type/User';
import { Post } from './type/Post';
import { Comment } from './type/Comment';
import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

function getUser(userId: number): User | null {
  return usersFromServer.find(user => user.id === userId) || null;
}

function getComment(id: number): Comment[] | [] {
  return commentsFromServer.filter(comment => id === comment.postId);
}

export const posts: Post[] = postsFromServer.map(post => ({
  ...post,
  user: getUser(post.userId),
  comments: getComment(post.id),
}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts} />
  </section>
);
