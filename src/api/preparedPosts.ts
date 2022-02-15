import comments from './comments';
import users from './users';
import posts from './posts';

export const preparedPosts = posts.map(post => {
  const user = users.find(u => u.id === post.userId) || null;
  const comment = comments.filter(c => c.postId === post.id);

  return {
    ...post,
    user,
    comment,
  };
});
