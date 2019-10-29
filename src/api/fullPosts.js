function getPostsWithUsersAndComents(posts, users, comments) {
  const fullPosts = Array.from(posts);

  for (let i = 0; i < fullPosts.length; i += 1) {
    fullPosts[i].user = users.find(user => user.id === fullPosts[i].userId);
    fullPosts[i].coments = comments.filter(
      comment => comment.postId === fullPosts[i].id
    );
  }

  return fullPosts;
}

export default getPostsWithUsersAndComents;
