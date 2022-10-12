import postsFromServer from '../../api/posts';
import commentsFromServer from '../../api/comments';
import usersFromServer from '../../api/users';
import { FullPost } from '../../react-app-env';
import { Post } from '../../types/Post';

const getCommentsById = (postId: number) => (
  commentsFromServer.filter(comment => (
    comment.postId === postId
  ))
);

const getUserById = (id: number) => (
  usersFromServer.find((user) => (
    user.id === id
  ))
);

export const posts: FullPost[] = postsFromServer.map((post: Post) => ({
  ...post,
  user: getUserById(post.userId) || null,
  comments: getCommentsById(post.id),
}));
