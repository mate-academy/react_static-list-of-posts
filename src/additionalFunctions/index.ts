import { User } from '../types/user';
import { Comment } from '../types/comment';

export function getUsers(userId:number, users: User[]) : User {
  return users.filter(u => u.id === userId)[0];
}

export function getComments(postId: number, comments: Comment[]): Comment[] {
  return comments.filter(comment => comment.postId === postId);
}
