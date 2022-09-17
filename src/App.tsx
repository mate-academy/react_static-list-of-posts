import './App.scss';

import commentsFromServer from './api/comments';
import postsFromServer from './api/posts';
import usersFromServer from './api/users';

import { PostList } from './components/PostList';

import { Comment } from './Types/Comment';
import { Post, AllPosts } from './Types/Post';
import { User } from './Types/User';

function allPosts(
  posts: Post[],
  comments: Comment[],
  users: User[],
): AllPosts[] {
  return posts.map((post) => ({
    ...post,
    comments: comments.filter((comment) => (
      comment.postId === post.id
    )),
    user: users.find((user) => (
      user.id === post.userId
    )) || null,
  }));
}

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList
      posts={allPosts(postsFromServer, commentsFromServer, usersFromServer)}
    />
  </section>
);
