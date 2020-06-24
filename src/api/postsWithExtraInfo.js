import posts from './posts';
import users from './users';
import comments from './comments';

export const postsWithExtraInfo = posts.map(post => ({
  ...post,
  user: users.find(person => person.id === post.userId),
  comments: comments.filter(comment => comment.postId === post.id),
}));
