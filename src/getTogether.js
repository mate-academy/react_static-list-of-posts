export default function getTogether (posts, users, comments) {

  posts.forEach(post => {
    post.user = Object.assign({}, users.find(user => user.id === post.userId));
    post.comments = comments.filter(comment => comment.postId === post.id);
  })
  return posts;
};
