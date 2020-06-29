import users from '../../api/users';
import comments from '../../api/comments';
import posts from '../../api/posts';

export const preparedPosts = [...posts].map((post) => {
  const postUser = users
    .find(user => (user.id === post.userId));
  const postComments = comments
    .filter(comment => (comment.postId === post.id));

  return {
    ...post,
    postUser,
    postComments,
  };
});
