import { User } from '../types/User';
import { Comment } from '../types/Comment';
import commentsFromServer from '../api/comments';
import usersFromServer from '../api/users';

export function findUserById(userId: number): User | null {
  return usersFromServer.find(user => user.id === userId) || null;
}

export function getCommentsByPostId(postId: number): Comment[] {
  const foundComment = commentsFromServer
    .filter(comment => comment.postId === postId);

  return foundComment;
}
