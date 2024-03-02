import usersFromServer from '../api/users';
import postsFromServer from '../api/posts';
import commentsFromServer from '../api/comments';
import { Post } from '../types/post';
import { User } from '../types/user';
import { Comment } from '../types/comment';

function getUser(userId: number): User | undefined {
  const foundUser = usersFromServer.find(user => user.id === userId);

  return foundUser;
}

function getComments(postId: number): Comment[] {
  const comments = commentsFromServer.filter(
    comment => comment.postId === postId,
  );

  return comments;
}

export const posts: Post[] = postsFromServer.map(post => ({
  ...post,
  user: getUser(post.userId),
  comments: getComments(post.id),
}));
