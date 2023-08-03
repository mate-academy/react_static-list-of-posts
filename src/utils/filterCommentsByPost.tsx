import { Comments } from '../types/Comments';

function filterCommentsByPost(
  postId: number, comments: Comments[],
) {
  return comments.filter(comment => comment.postId === postId);
}

export default filterCommentsByPost;
