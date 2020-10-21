import posts from '../api/posts';
import users from '../api/users';
import comments from '../api/comments';

const usersMap = {};

users.forEach((user) => {
  usersMap[user.id] = { ...user };
});

const commentsMap = {};

comments.forEach((comment) => {
  commentsMap[comment.postId]
    ? commentsMap[comment.postId].push({ ...comment })
    : commentsMap[comment.postId] = [{ ...comment }];
});

const preparedPostss = posts
  .map(post => ({
    ...post,
    user: usersMap[post.userId],
    comments: commentsMap[post.id],
  }));

export default preparedPostss;
