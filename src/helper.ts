import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
import { Comment, FullPost, User } from './types';

function getUser(userId: number): User | undefined {
  return usersFromServer.find(userFromServer => userFromServer.id === userId);
}

function getComments(id: number): Comment[] {
  return commentsFromServer.filter(commentFromServer => (
    commentFromServer.postId === id
  ));
}

export const posts: FullPost[] = postsFromServer.map(post => ({
  ...post,
  user: getUser(post.userId),
  comments: getComments(post.id),
}));
