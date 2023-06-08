import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
import { Post } from './types/Post';

const getUser = (userId: number) => (
  usersFromServer.find(user => user.id === userId) || null
);

const getComments = (postId: number) => (
  commentsFromServer.filter(comment => comment.postId === postId)
);

export const posts: Post[] = postsFromServer.map(post => ({
  ...post,
  user: getUser(post.userId),
  comments: getComments(post.id),
}));
