import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

import { PostList } from './components/PostList';

import { Comment } from './types/Comment';

import './App.scss';

const getUser = (id: number) => usersFromServer.find(user => user.id === id);

const getComments = (id: number) => {
  const comments: Comment[] = [];

  commentsFromServer.forEach(comment => {
    if (comment.postId === id) {
      comments.push(comment);
    }
  });

  return comments;
};

const posts = postsFromServer.map(post => {
  return {
    ...post,
    user: getUser(post.userId),
    comments: getComments(post.id),
  };
});

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts} />
  </section>
);
