import { User } from '../types/User';
import { Comment } from '../types/Comment';
import { Post } from '../types/Post';

import usersFromServer from '../api/users';
import commentsFromServer from '../api/comments';
import postsFromServer from '../api/posts';

function getUser(userId: number): User | null {
  const foundUser = usersFromServer.find(user => user.id === userId);

  return foundUser || null;
}

function getComments(postId: number): Comment[] {
  const comments = commentsFromServer
    .filter(comment => comment.postId === postId);

  return comments;
}

export const posts:Post[] = postsFromServer.map(post => (
  {
    ...post,
    user: getUser(post.userId),
    comments: getComments(post.id),
  }
));
