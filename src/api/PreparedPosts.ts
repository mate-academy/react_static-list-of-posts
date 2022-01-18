import posts from './posts';
import comments from './comments';
import users from './users';

export const preparedPosts: PreparedPost[] = posts.map(
  post => ({
    ...post,
    user: users.find(user => (
      post.userId === user.id
    )) || null,
    comments: comments.filter(comment => (
      comment.postId === post.id
    )),
  }),
);
