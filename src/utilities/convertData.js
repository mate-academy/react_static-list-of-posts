
export const convertData = (posts, users, comments) => [...posts]
  .map((post) => {
    const matchedUser = users.find(user => user.id === post.userId);

    const postComments = comments.filter(comment => comment.postId === post.id);

    return {
      ...post, user: { ...matchedUser }, comments: [...postComments],
    };
  });
