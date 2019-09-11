export function getPostUsers(posts, users) {
  return posts.map(post => (
    {
      ...post,
      user: users.find(user => user.id === post.userId),
    }
  ));
}

// function getCommentUsers(comments, users) {
//   return preparedPostUsers
//     .map(user => comments.find(comment => comment.postId === user.id));
// }

export default getPostUsers;
