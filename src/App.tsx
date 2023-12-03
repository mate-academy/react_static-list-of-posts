import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

import { Comment } from './types/comment';
import { User } from './types/user';
import { Post } from './types/post';

import { PostList } from './components/PostList/PostList';

const getUser = (userId : number) : User | null => {
  return usersFromServer.find(user => user.id === userId) || null;
};

const getComments = (id : number) : Comment[] => {
  return commentsFromServer.filter(comment => comment.postId === id);
};

export const posts: Post[] = postsFromServer.map(post => ({
  ...post,
  user: getUser(post.userId),
  comments: getComments(post.id),
}));

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={posts} />

  </section>
);
