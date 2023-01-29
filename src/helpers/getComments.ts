import commentsFromServer from '../api/comments';

import { Comment } from '../types/Comment';

export function getComments(postId: number): Comment[] {
  const listOfComments = commentsFromServer.filter(
    comment => comment.postId === postId,
  );

  return listOfComments;
}
