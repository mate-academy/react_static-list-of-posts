import postsFromServer from '../api/posts';
import commentsFromServer from '../api/comments';
import usersFromServer from '../api/users';
import { Comment } from '../Interfaces/Comment';
import { User } from '../Interfaces/User';
import { Post } from '../Interfaces/Posts';

export const getComments = (postId: number): Comment[] | [] => {
  return commentsFromServer
    .filter((comment: Comment) => comment.postId === postId);
};

export const getUser = (userId: number) => {
  const foundUser = usersFromServer.find((user: User) => user.id === userId);

  return foundUser || null;
};

export const posts: Post[] = postsFromServer.map((post) => ({
  ...post,
  user: getUser(Number(post.userId)),
  comments: getComments(post.id),
}));
