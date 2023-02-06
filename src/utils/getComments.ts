import { Comment } from '../types/Comment';
import commentsFromServer from '../api/comments';

export function getComments(postId: number): Comment[] | [] {
  const comments = commentsFromServer.filter(
    (comment) => comment.postId === postId,
  );

  return comments || [];
}
