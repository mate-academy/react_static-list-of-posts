import usersFromServer from './users';
import commentsFromServer from './comments';
import postsFromServer from './posts';

import { Comment } from '../types/Comment';
import { User } from '../types/User';
import { Post } from '../types/Post';

function getUser(userId:number): User | null {
  const foundUser = usersFromServer.find(user => user.id === userId);

  return foundUser || null;
}

function getComments(postId:number): Comment[] {
  const foundComments = commentsFromServer.filter(comment => (
    comment.postId === postId
  ));

  return foundComments;
}

export const posts: Post[] = postsFromServer.map(post => ({
  ...post,
  user: getUser(post.userId),
  comments: getComments(post.id),
}));
