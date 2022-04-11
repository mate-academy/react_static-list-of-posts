import { FC } from 'react';

import './App.scss';
import { User } from './components/types/User';
import { Comment } from './components/types/comment';
import { Post, FullPost } from './components/types/Post';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
import { PostList } from './components/PostList/PostList';

function preparedPosts(
  posts: Post[],
  comments: Comment[],
  users: User[],
): FullPost[] {
  return posts.map((post) => ({
    ...post,
    user: users.find(user => user.id === post.userId),
    comments: comments.filter(comment => comment.postId === post.id),
  }));
}

const preparePosts = preparedPosts(postsFromServer, commentsFromServer, usersFromServer);

export const App: FC = () => (
  <PostList posts={preparePosts} />
);
