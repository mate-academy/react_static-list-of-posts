import { User } from '../types/User';
import { Comment } from '../types/Comment';
import { Post } from '../types/Post';

import postsFromServer from '../api/posts';
import commentsFromServer from '../api/comments';
import usersFromServer from '../api/users';

function getUser(userId: number): User | null {
  const foundUser = usersFromServer.find(user => user.id === userId);

  return foundUser || null;
}

function getComments(postId: number): Comment[] {
  const comments = commentsFromServer
    .filter(comment => comment.postId === postId);

  return comments;
}

export const posts:Post[] = postsFromServer.map(currentPost => (
  {
    ...currentPost,
    user: getUser(currentPost.userId),
    comments: getComments(currentPost.id),
  }
));
