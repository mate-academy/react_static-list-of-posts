import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

import { User } from './types/User';
import { Post } from './types/Post';
import { Comment } from './types/Comment';

import { PostList } from './components/PostList';

import './App.scss';

const getUserById = (userId: number): User | null => (
  usersFromServer.find(user => (
    userId === user.id
  )) || null
);

const getCommentsById = (postId: number): Comment[] => (
  commentsFromServer.filter(comment => (
    comment.postId === postId
  ))
);

export const posts: Post[] = postsFromServer.map(post => ({
  ...post,
  user: getUserById(post.userId),
  comment: getCommentsById(post.id),
}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <div className="PostList">
      <PostList posts={posts} />
    </div>
  </section>
);
