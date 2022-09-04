import { Post } from '../types/Post';
import { Comment } from '../types/Comment';
import { User } from '../types/User';

import postsFromServer from '../api/posts';
import commentsFromServer from '../api/comments';
import usersFromServer from '../api/users';

function getComments(postId: number): Comment[] {
  return commentsFromServer
    .filter(comment => comment.postId === postId);
}

function getUser(userId: number): User | null {
  const postUser = usersFromServer
    .find(user => user.id === userId);

  return postUser || null;
}

export const posts: Post[] = postsFromServer.map(post => ({
  ...post,
  comments: getComments(post.id),
  user: getUser(post.userId),
}));
