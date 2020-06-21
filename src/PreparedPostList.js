export function preparedPostsList(postsList, commentsList, usersList) {
  const clonedPostsList = postsList.map((post) => {
    const clonedPost = { ...post };

    clonedPost.user = (usersList.find(user => user.id === clonedPost.userId));
    clonedPost.comments = (commentsList.filter(comment => (
      comment.postId === clonedPost.id
    )));

    return clonedPost;
  });

  return clonedPostsList;
}
