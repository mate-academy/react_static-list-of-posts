export function preparedPostsList(postsList, commentsList, usersList) {
  const clonedPostsList = postsList.map(post => ({
    ...post,
    user: usersList.find(user => user.id === post.userId),
    comments: commentsList.filter(comment => (comment.postId === post.id)),
  }));

  return clonedPostsList;
}
