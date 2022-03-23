import posts from '../api/posts';
import comments from '../api/comments';
import users from '../api/users';

export const readyPosts = posts.map(post => {
  return {
    ...post,
    user: users.find(user => user.id === post.userId) || null,
    comments: comments.filter(comment => comment.postId === post.id) || null,
  };
});
