import { User } from '../types/user';
import { Comment } from '../types/comment';

export function getUsers(userId:number, users: User[]) : User | null {
  return users.find(user => user.id === userId) || null;
}

export function getComments(postId: number, comments: Comment[]): Comment[] {
  return comments.filter(comment => comment.postId === postId);
}
