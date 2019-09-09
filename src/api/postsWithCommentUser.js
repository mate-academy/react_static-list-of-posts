import posts from './posts';
import comments from './comments';
import users from './users';

const postWithCommentsUser = posts.map(post => (
  {
    ...post,
    user: users.find(user => (
      user.id === post.userId
    )),
    comments: comments.filter(comment => (
      comment.postId === post.id
    )),
  })
);

export default postWithCommentsUser;
