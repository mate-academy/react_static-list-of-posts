import commentsFromServer from '../api/comments';
import usersFromServer from '../api/users';
import { Comment } from '../types/Comment';
import { User } from '../types/User';

export function getUser(userId: number): User | null {
  return usersFromServer.find(user => (
    user.id === userId
  )) || null;
}

export function getComments(postID: number): Comment[] | [] {
  return commentsFromServer.filter(comment => (
    comment.postId === postID
  ));
}
