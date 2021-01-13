import comments from './comments';
import posts from './posts';
import users from './users';

export const preparedPosts = posts.map(post => (
  {
    ...post,
    user: users.find(user => user.id === post.userId),
    comments: comments.filter(comment => comment.postId === post.id),
  }
));
