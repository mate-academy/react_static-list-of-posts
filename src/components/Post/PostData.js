import users from '../../api/users';
import comments from '../../api/comments';

export const getUser = id => (
  users.find(usr => (usr.id === id))
);
export const filterComments = id => (
  comments.filter(comment => (comment.postId === id))
);
