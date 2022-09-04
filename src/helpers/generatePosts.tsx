import { Post } from '../types/Post';
import { Comment } from '../types/Comment';

import postsFromServer from '../api/posts';
import commentsFromServer from '../api/comments';
import usersFromServer from '../api/users';

function getComments(postId: number): Comment[] {
  return commentsFromServer.filter(comment => (
    comment.postId === postId
  ));
}

export const posts: Post[] = postsFromServer.map(post => ({
  ...post,
  comments: getComments(post.id),
  user: usersFromServer.find(user => user.id === post.userId) || null,
}));
