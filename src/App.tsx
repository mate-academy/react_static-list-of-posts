import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
import { User } from './types/User';
import { Comments } from './types/Comments';
import { Post } from './types/Post';
import PostList from './components/PostList';

function getUserByUserId(userId: number): User | null {
  const foundUser = usersFromServer.find(user => user.id === userId);

  return foundUser || null;
}

function getCommentsByPostId(postId: number): Comments[] | null {
  const foundComments = commentsFromServer.filter(comment => (
    comment.postId === postId
  ));

  return foundComments.length > 0 ? foundComments : null;
}

const posts: Post[] = postsFromServer.map(post => ({
  ...post,
  comments: getCommentsByPostId(post.id),
  user: getUserByUserId(post.userId),
}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts} />
  </section>
);
