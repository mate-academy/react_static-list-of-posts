export default function getTogether (posts, users, comments) {

  const postsMutated = posts.map(post => {
    let postMutated = post;
    postMutated.user = Object.assign({}, users.find(user => user.id === post.userId));
    postMutated.comments = comments.filter(comment => comment.postId === post.id);
    return postMutated;
  })
  return postsMutated;
};
