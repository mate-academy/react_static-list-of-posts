import { PostList } from './components/PostList';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

import { User } from './types/User';
import { Comment } from './types/Comment';
import { Post } from './types/Post';

import './App.scss';

function getComments(id:number): Comment[] {
  const comments = commentsFromServer.filter(comment => id === comment.postId);

  return comments;
}

function getUser(id:number): User | null {
  const foundUser = usersFromServer.find(user => id === user.id);

  return foundUser || null;
}

const posts: Post[] = postsFromServer.map(post => {
  return {
    ...post,
    comments: getComments(post.id),
    user: getUser(post.userId),
  };
});

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts} />
  </section>
);
