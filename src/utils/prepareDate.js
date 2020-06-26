export const prepareDate = (posts, users) => posts.map(post => ({
  ...post,
  author: users.find(user => user.id === post.userId),
}));

export const commentsFilter = (comments, postId) => (
  comments.filter(comment => comment.postId === postId));
