import commentsFromServer from "./api/comments";

export function getPostComments(postId: number) {
  const postComments = commentsFromServer.filter(
    (comment) => comment.postId === postId,
  );

  return postComments;
}
