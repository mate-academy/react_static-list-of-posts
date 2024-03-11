import commentsFromServer from "./api/comments";
import { Comment } from "./Types/Comment";

export function getComment(postId: number): Comment[] {
  const postComments = commentsFromServer.filter(
    (comment) => comment.postId === postId,
  );

  return postComments;
}
