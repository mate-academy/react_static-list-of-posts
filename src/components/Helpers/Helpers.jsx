import commentsFromServer from '../../api/comments';
import usersFromServer from '../../api/users';

export function getUser(id) {
  const foundUser = usersFromServer.find((user) => user.id === id);

  return foundUser || null;
}

export function getComment(id) {
  const filteredComment = commentsFromServer.filter(
    (comment) => comment.postId === id,
  );

  return filteredComment;
}
