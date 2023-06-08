import { User } from './types/User';
import { Comment } from './types/Comment';
import { PostPrepared } from './types/postsPrepared';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

export const findUserByPostId = (userId: number): User | null => {
  const foundUser = usersFromServer.find(user => user.id === userId);

  return foundUser || null;
};

export const findCommentById = (postId: number): Comment[] => {
  const foundComments = commentsFromServer
    .filter(comment => comment.postId === postId);

  return foundComments || null;
};

export const postsPrepared: PostPrepared[] = postsFromServer.map(post => ({
  ...post,
  user: findUserByPostId(post.userId),
  comments: findCommentById(post.id),
}));
