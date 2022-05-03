import { LinkedObject } from './types/types';
import { Comment } from './types/Comment';
import { Post, PostRequired } from './types/Post';
import { User } from './types/User';

export const getPreparedComments = (commentList: Comment[]): LinkedObject<Comment[]> => {
  return commentList.reduce((accum: LinkedObject<Comment[]>, comment: Comment) => ({
    ...accum,
    [comment.postId]: [...(accum[comment.postId] || []), comment],
  }), {});
};

export const getPreparedUsers = (userList: User[]): LinkedObject<User> => {
  return userList.reduce((accum: LinkedObject<User>, user: User) => ({
    ...accum,
    [user.id]: user,
  }), {});
};

export const getPreparedPosts = (
  postList: Post[],
  userList: LinkedObject<User>,
  commentList: LinkedObject<Comment[]>,
): PostRequired[] => {
  return postList.map((post: Post) => (
    {
      ...post,
      user: userList[post.userId],
      comments: commentList[post.id],
    }
  ));
};
