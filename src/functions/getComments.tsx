import commentsFromServer from '../api/comments';

export function getComments(postId: number) {
  return commentsFromServer.filter(comment => (
    comment.postId === postId
  ));
}
