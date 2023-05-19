import { Comment } from "../types/comment";
import { Post } from "../types/post";

export function findComments(comments: Comment[], post: Post) {
  return comments.filter(comment => comment.postId === post.id);
};