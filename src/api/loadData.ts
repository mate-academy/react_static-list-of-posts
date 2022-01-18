import posts from './posts';
import comments from './comments';
import users from './users';

export const getPreparedPosts = (): PreparedPost[] => posts.map(
  (post) => ({
    ...post,
    user: users.find(user => user.id === post.userId) || null,
    comments: comments.filter(comment => comment.postId === post.id),
  }),
);
