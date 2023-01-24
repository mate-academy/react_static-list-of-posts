import usersFromServer from './users';
import commentsFromServer from './comments';
import postsFromServer from './posts';

import { Comment } from '../types/Comment';
import { User } from '../types/User';
import { Post } from '../types/Post';

function getUserById(userId:number): User | null {
  const foundUser = usersFromServer.find(user => user.id === userId);

  return foundUser || null;
}

function getCommentsByPostId(postId:number): Comment[] {
  const foundComments = commentsFromServer.filter(comment => (
    comment.postId === postId
  ));

  return foundComments;
}

export const posts: Post[] = postsFromServer.map(post => ({
  ...post,
  user: getUserById(post.userId),
  comments: getCommentsByPostId(post.id),
}));
