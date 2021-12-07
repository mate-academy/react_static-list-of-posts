import comments from './comments';
import posts from './posts';
import users from './users';

export const preparedPosts = posts.map((post) => ({
  ...post,
  user: users.find(user => post.userId === user.id),
  comment: comments.filter(comment => post.id === comment.postId),
}));
