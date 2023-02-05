import usersFromServer from './api/users';
import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';

import { User } from './types/User';
import { Post } from './types/Post';
import { Comment } from './types/Comment';

function getUserWithPost(postId: number): User | null {
  const userWithPost = usersFromServer.find(user => user.id === postId);

  return userWithPost || null;
}

function getUserWithComments(postId: number): Comment[] | [] {
  const userWithComments = commentsFromServer
    .filter(comment => comment.postId === postId);

  return userWithComments || [];
}

export const postWithComments: Post[] = postsFromServer.map(post => ({
  ...post,
  user: getUserWithPost(post.userId),
  comments: getUserWithComments(post.id),
}));
