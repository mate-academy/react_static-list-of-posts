/* eslint-disable import/extensions */
import postsFromServer from '../api/posts';
import commentsFromServer from '../api/comments';
import usersFromServer from '../api/users';
import { Post } from '../types/post';
import { User } from '../types/user';

function getUser(userId: number): User | null {
  const findUser = usersFromServer.find(user => user.id === userId);

  return findUser || null;
}

function getComment(commentId: number) {
  const findComment = commentsFromServer.filter(
    comment => comment.postId === commentId,
  );

  return findComment;
}

export const posts: Post[] = postsFromServer.map(post => {
  return {
    ...post,
    user: getUser(post.userId),
    comments: getComment(post.id),
  };
});
