import usersFromServer from './users';
import commentsFromServer from './comments';
import postsFromServer from './posts';

import { Comment } from '../types/Comment';
import { User } from '../types/User';
import { Post } from '../types/Post';

function getUserById(userId:number): User | null {
  return usersFromServer.find(user => user.id === userId) || null;
}

function getCommentsByPostId(postId:number): Comment[] {
  return commentsFromServer.filter(comment => (
    comment.postId === postId
  ));
}

export const posts: Post[] = postsFromServer.map(post => ({
  ...post,
  user: getUserById(post.userId),
  comments: getCommentsByPostId(post.id),
}));
