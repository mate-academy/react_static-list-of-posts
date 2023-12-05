import postsFromServer from './posts';
import commentsFromServer from './comments';
import usersFromServer from './users';

import { Post, Comment, User } from '../types';

function getUser(userId: number): User | null {
  const foundUser = usersFromServer.find(user => user.id === userId);
  
  return foundUser || null;
}
  
function getCommentsByPostId(id: number): Comment[] | null {
  const foundComment = commentsFromServer
    .filter(comment => comment.postId === id);
  
  return foundComment || null;
}
  
export const posts: Post[] = postsFromServer.map(post => ({
  user: getUser(post.userId),
  comments: getCommentsByPostId(post.id),
  ...post,
}));