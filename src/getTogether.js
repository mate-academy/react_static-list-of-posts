export default function getTogether (posts, users, comments) {

  const postsMutated = posts.map(post => {
    return {...post,
    user: users.find(user => user.id === post.userId),
    comments: comments.filter(comment => comment.postId === post.id)}
  })
  return postsMutated;
};
