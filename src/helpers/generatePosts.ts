import { User } from '../types/User';
import { Post } from '../types/Post';
import { Comment } from '../types/Comment';

import postsFromServer from '../api/posts';
import commentsFromServer from '../api/comments';
import usersFromServer from '../api/users';

function getUserById(userId: number): User | null {
  const foundUser = usersFromServer.find(user => user.id === userId);

  return foundUser || null;
}

function getCommentsById(postId: number): Comment[] | null {
  const comments = commentsFromServer
    .filter(comment => comment.postId === postId);

  return comments.length !== 0
    ? comments
    : null;
}

export const posts: Post[] = postsFromServer.map(post => ({
  ...post,
  user: getUserById(post.userId),
  comments: getCommentsById(post.id),
}));
