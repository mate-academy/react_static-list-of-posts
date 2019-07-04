import comments from './api/comments';
import users from './api/users';

export const getUser = userId => (
  users.find(user => user.id === userId)
);

export const getComment = postId => (
  comments.filter(comment => comment.postId === postId)
);
