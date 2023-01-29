import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

import { FullPost, Post } from './types/Post';
import { User } from './types/User';
import { Comment } from './types/Comment';
import { PostList } from './components/PostList';

const preparePosts = (
  posts: Post[],
  comments: Comment[],
  users: User[],
): FullPost[] => (
  posts.map((post) => ({
    ...post,
    comments: comments.filter((comment) => comment.postId === post.id),
    user: users.find((user) => user.id === post.userId) || null,
  }))
);

const preparedPosts = preparePosts(
  postsFromServer,
  commentsFromServer,
  usersFromServer,
);

export const App: React.FC = () => (
  <section className="App">
    <PostList posts={preparedPosts} />
  </section>
);
