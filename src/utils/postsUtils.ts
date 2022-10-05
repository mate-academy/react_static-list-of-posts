import commentsFromServer from '../api/comments';
import usersFromServer from '../api/users';
import { Comment } from '../Interfaces/Comment';
import { User } from '../Interfaces/User';

export const getComments = (postId: number): Comment[] | [] => {
  return commentsFromServer
    .filter((comment: Comment) => comment.postId === postId);
};

export const getUser = (userId: number) => {
  const foundUser = usersFromServer.find((user: User) => user.id === userId);

  return foundUser || null;
};
