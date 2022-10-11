import postsFromServer from '../../api/posts';
import commentsFromServer from '../../api/comments';
import usersFromServer from '../../api/users';

const GetCommentsById = (postId: number) => (
  commentsFromServer.filter(comment => (
    comment.postId === postId
  ))
);

const getUserById = (id: number) => (
  usersFromServer.find((user) => (
    user.id === id
  ))
);

export const posts = postsFromServer.map(post => ({
  ...post,
  user: getUserById(post.userId),
  comments: GetCommentsById(post.id),
}));
