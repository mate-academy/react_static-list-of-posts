import { LinkedObject } from './types/types';
import { IComment } from './types/Comment';
import { IPost, IPostRequired } from './types/IPost';
import { IUser } from './types/User';

export const getPreparedComments = (commentList: IComment[]): LinkedObject<IComment[]> => {
  const preparedComents: LinkedObject<IComment[]> = {};

  commentList.forEach((comment: IComment) => {
    if (!preparedComents[comment.postId]) {
      preparedComents[comment.postId] = [];
    }

    preparedComents[comment.postId].push(comment);
  });

  return preparedComents;
};

export const getPreparedUsers = (userList: IUser[]): LinkedObject<IUser> => {
  const preparedComents: LinkedObject<IUser> = {};

  userList.forEach((user: IUser) => {
    preparedComents[user.id] = user;
  });

  return preparedComents;
};

export const getPreparedPosts = (
  postList: IPost[],
  userList: LinkedObject<IUser>,
  commentList: LinkedObject<IComment[]>,
): IPostRequired[] => {
  return postList.map((post: IPost) => (
    {
      ...post,
      user: userList[post.userId],
      comments: commentList[post.id],
    }
  ));
};
